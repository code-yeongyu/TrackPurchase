import puppeteer from "puppeteer";
import { ElementParser } from ".";

export type LoginEvent =
  | "success"
  | "otp-required"
  | "manual-otp-required"
  | "unexpected";

export interface CaptchaStatus {
  readonly imageData: string;
  readonly question: string;
}

export default class PageInteractor {
  private _fullyLoaded = false;

  constructor(
    private readonly page: puppeteer.Page,
    private readonly elementParser: ElementParser
  ) {
    this.page = page;
    this.elementParser = elementParser;
  }

  private async clickLoginButton() {
    await Promise.all([
      this.page.click("#log\\.login"),
      this.page.waitForNavigation({ waitUntil: "networkidle2" }),
    ]);
  }

  private async typeLoginInfo(id: string, password: string, delay: number) {
    await this.page.focus("#id");
    await this.page.keyboard.type(id, { delay: delay });
    await this.page.focus("#pw");
    await this.page.keyboard.type(password, { delay: delay });
    await this.clickLoginButton();
  }

  private async waitForLoginElements() {
    await Promise.all([
      this.page.waitForSelector("#id"),
      this.page.waitForSelector("#pw"),
    ]);
  }

  async login(id: string, password: string, delay?: number, loginURL?: string) {
    await this.waitForLoginElements();
    await this.typeLoginInfo(id, password, delay || 200);
  }

  async getLoginStatus(loginURL?: string): Promise<LoginEvent> {
    const isLoginPage = this.page
      .url()
      .includes(loginURL || "https://nid.naver.com/nidlogin.login");
    if (!isLoginPage) {
      return "success";
    }

    const otpElementDisplayStyle = await this.page.evaluate(() => {
      const button = document.querySelector("#remail_btn1");
      if (!(button instanceof HTMLElement)) {
        return;
      }
      return button.style.display;
    });
    if (otpElementDisplayStyle !== "") {
      return "otp-required";
    }

    const manualOTPElement =
      await this.elementParser.parseManualOTPInputElement();
    if (manualOTPElement) {
      return "manual-otp-required";
    }

    return "unexpected";
  }

  async fillManualOTPInput(code: string) {
    const manualOTPElement =
      await this.elementParser.parseManualOTPInputElement();
    if (!manualOTPElement) {
      throw new Error("manual-otp-input-element not found");
    }
    await manualOTPElement.type(code);
    await manualOTPElement.press("Enter");
  }

  async getCaptchaStatus(): Promise<CaptchaStatus | null> {
    const data = await this.page.evaluate(() => {
      const captchaImage = document.querySelector(
        "#captchaimg"
      ) as HTMLElement | null;
      const captchaText = document.querySelector(
        "#captcha_info"
      ) as HTMLElement | null;

      if (!captchaImage || !captchaText) {
        return;
      }

      const imageData = captchaImage.getAttribute("src") as string;
      const question = captchaText.innerText;

      return { imageData, question };
    });

    return data || null;
  }

  async fillCaptchaInput(answer: string, password: string) {
    const captchaElement = await this.elementParser.parseCaptchaInputElement();
    if (!captchaElement) {
      throw new Error("captcha input element not found");
    }
    await captchaElement.type(answer);

    await this.typeLoginInfo("", password, 200);
  }

  async loadMoreHistory() {
    if (this._fullyLoaded) {
      return;
    }

    const buttonSelector = "div[class^='ButtonPrevList_article__'] > button";
    const currentScrollHeight: number = await this.page.evaluate(() => {
      return document.body.scrollHeight;
    });
    const loadMoreButton = await this.page.$(buttonSelector);

    await loadMoreButton?.click();
    try {
      await this.page.waitForFunction(
        // wait 1000ms to scroll height increases
        (currentScrollHeight: number) => {
          return document.body.scrollHeight > currentScrollHeight;
        },
        { timeout: 2000 },
        currentScrollHeight
      );
    } catch (e) {
      if (e instanceof puppeteer.errors.TimeoutError) {
        const newLoadMoreButton = await this.page.$(buttonSelector);
        if (newLoadMoreButton === null) {
          this._fullyLoaded = true;
        }
        return;
      }
      console.error(e);
    }
  }

  async loadPaymentHistoryUntilPageEnds() {
    while (!this._fullyLoaded) {
      await this.loadMoreHistory();
    }
  }
}

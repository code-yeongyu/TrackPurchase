import puppeteer from "puppeteer";

export type LoginEvent =
  | "success"
  | "otp-required"
  | "manual-otp-required"
  | "unexpected";

export interface CaptchaStatus {
  readonly imageData: string;
  readonly question: string;
}

export class PageInteractor {
  constructor(private readonly page: puppeteer.Page) {
    this.page = page;
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

  otpInputSelector = "#otp";
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

    const manualOTPElement = await this.page.$(this.otpInputSelector);
    if (manualOTPElement) {
      return "manual-otp-required";
    }

    return "unexpected";
  }

  captchaImageSelector = "#captchaimg";
  captchaTextSelector = "#captcha_info";
  async getCaptchaStatus(): Promise<CaptchaStatus | null> {
    const data = await this.page.evaluate(
      (captchaImageSelector: string, captchaTextSelector: string) => {
        const captchaImage = document.querySelector(
          captchaImageSelector
        ) as HTMLElement | null;
        const captchaText = document.querySelector(
          captchaTextSelector
        ) as HTMLElement | null;

        if (!captchaImage || !captchaText) {
          return;
        }

        const imageData = captchaImage.getAttribute("src") as string;
        const question = captchaText.innerText;

        return { imageData, question };
      },
      this.captchaImageSelector,
      this.captchaTextSelector
    );

    return data || null;
  }

  async fillManualOTPInput(code: string) {
    const manualOTPElement = await this.page.$(this.otpInputSelector);
    if (!manualOTPElement) {
      throw new Error("manual-otp-input-element not found");
    }
    await manualOTPElement.type(code);
    await manualOTPElement.press("Enter");
  }

  catchaInputSelector = "#captcha";
  async fillCaptchaInput(answer: string, password: string) {
    const captchaElement = await this.page.$(this.catchaInputSelector);
    if (!captchaElement) {
      throw new Error("captcha input element not found");
    }
    await captchaElement.type(answer);

    await this.typeLoginInfo("", password, 200);
  }

  async getCookies() {
    const cookies = await this.page.cookies();
    let cookieString = "";
    for (const cookie of cookies) {
      cookieString += `${cookie.name}=${cookie.value}; `;
    }
    return cookieString;
  }
}

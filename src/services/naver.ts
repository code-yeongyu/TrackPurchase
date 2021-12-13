import puppeteer from "puppeteer";
import Payment from "types/payment";
import PAYMENT_HISTORY_STATUS from "types/paymentHistoryStatus";

export default class NaverPaymentHistoryService {
  private readonly LOGIN_URL = "https://nid.naver.com/nidlogin.login";
  private readonly HISTORY_URL =
    "https://new-m.pay.naver.com/historybenefit/paymenthistory";

  private id: string;
  private password: string;
  private page: puppeteer.Page;
  private _history: Payment[] = [];
  private _fullyLoaded = false;

  constructor(page: puppeteer.Page, id: string, password: string) {
    this.page = page;
    this.id = id;
    this.password = password;
  }

  async gotoLoginPage() {
    await this.page.goto(this.LOGIN_URL);
  }

  async login() {
    await this.page.waitForSelector("#id");
    await this.page.focus("#id");
    await this.page.keyboard.type(this.id, { delay: 150 });
    await this.page.focus("#pw");
    await this.page.keyboard.type(this.password, { delay: 150 });
    await this.page.keyboard.press("Enter");
    await this.page.waitForSelector("#query");
  }

  async gotoPaymentHistoryPage() {
    await this.page.goto(this.HISTORY_URL);
    await this.page.waitForSelector("div[class^='paymentHistory_section__']");
  }

  private async getPaymentElements() {
    const elements = await this.page.$$(
      "div[class^='PaymentList_article__'] > ul > li"
    );
    return elements;
  }

  private parseTimestampFromString(date: string) {
    let splittedByDot = date.split(".");
    if (splittedByDot.length === 1) {
      return;
    }
    splittedByDot = splittedByDot.slice(0, splittedByDot.length - 1);

    const isThisYear = splittedByDot.length == 2;

    if (isThisYear) {
      const year = 2021;
      const month = +splittedByDot[0].trim();
      const day = +splittedByDot[1].trim();
      return new Date(year, month - 1, day).getTime();
    }

    const year = +splittedByDot[0].trim();
    const month = +splittedByDot[1].trim();
    const day = +splittedByDot[2].trim();
    return new Date(year, month - 1, day).getTime();
  }

  private async parsePaymentElement(element: puppeteer.ElementHandle) {
    const thumbnailUrl = await element.$eval(
      'div[class^="PaymentList_thumb__"] > img',
      (el) => el.getAttribute("src")
    );
    const title = await element.$eval(
      'strong[class^="PaymentList_name__"]',
      (el) => el.textContent
    );
    const statusString = await element.$eval(
      'div[class^="PaymentList_status__"]',
      (el) => el.textContent
    );
    const priceString = await element.$eval(
      'div[class^="PaymentList_sum__"]',
      (el) => el.textContent
    );
    const purchasedAtString = await element.$eval(
      "div[class^='PaymentList_date__']",
      (el) => el.textContent
    );

    const isRequiredFieldExists = !(
      thumbnailUrl &&
      title &&
      priceString &&
      statusString &&
      purchasedAtString
    );

    if (isRequiredFieldExists) {
      console.error("parsePaymentElement: invalid element");
      return;
    }

    const price = +priceString.replace(/[^0-9]/g, "");
    const status: PAYMENT_HISTORY_STATUS = <PAYMENT_HISTORY_STATUS>statusString;
    const purchasedAtTimestamp: number | undefined =
      this.parseTimestampFromString(purchasedAtString);

    const payment: Payment = {
      thumbnailUrl,
      title,
      price,
      status,
      purchasedAtTimestamp,
    };

    return payment;
  }

  async parsePaymentHistory() {
    const elements = await this.getPaymentElements();
    let history: Payment[] = [];

    for (const element of elements) {
      const payment = await this.parsePaymentElement(element);
      if (!payment) {
        continue;
      }
      history.push(payment);
    }

    this._history = history;
  }

  async loadMorePaymentHistory() {
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
        (currentScrollHeight: number) => {
          return document.body.scrollHeight > currentScrollHeight;
        },
        { timeout: 1000 },
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

  async loadFullPaymentHistory() {
    while (!this._fullyLoaded) {
      await this.loadMorePaymentHistory();
    }
  }

  public get history() {
    return this._history;
  }
}

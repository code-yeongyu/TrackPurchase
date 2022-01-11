import puppeteer from "puppeteer";

export default class URLChanger {
  private readonly page: puppeteer.Page;

  constructor(page: puppeteer.Page) {
    this.page = page;
  }

  async moveToLoginURL() {
    await this.page.goto("https://nid.naver.com/nidlogin.login");
  }

  async moveToPaymentHistoryURL() {
    await this.page.goto(
      "https://new-m.pay.naver.com/historybenefit/paymenthistory"
    );
    await this.page.waitForSelector("div[class^='paymentHistory_section__']");
  }
}

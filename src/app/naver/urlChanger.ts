import puppeteer from "puppeteer";

export default class URLChanger {
  private readonly page: puppeteer.Page;
  loginURL = "https://nid.naver.com/nidlogin.login";
  paymentHistoryURL =
    "https://new-m.pay.naver.com/historybenefit/paymenthistory";

  constructor(page: puppeteer.Page) {
    this.page = page;
  }

  async moveToLoginURL() {
    await this.page.goto(this.loginURL);
  }

  async moveToPaymentHistoryURL() {
    await this.page.goto(this.paymentHistoryURL);
    await this.page.waitForSelector("div[class^='paymentHistory_section__']");
  }
}

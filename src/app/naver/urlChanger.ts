import puppeteer from "puppeteer";

export default class URLChanger {
  loginURL = "https://nid.naver.com/nidlogin.login";
  paymentHistoryURL =
    "https://new-m.pay.naver.com/historybenefit/paymenthistory";

  constructor(private readonly page: puppeteer.Page) {
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

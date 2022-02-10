import puppeteer from "puppeteer";

export class URLChanger {
  constructor(private readonly page: puppeteer.Page) {
    this.page = page;
  }

  loginURL = "https://nid.naver.com/nidlogin.login";
  async moveToLoginURL() {
    await this.page.goto(this.loginURL);
  }
}

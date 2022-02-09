import puppeteer from "puppeteer";

export default class ElementParser {
  constructor(private readonly page: puppeteer.Page) {
    this.page = page;
  }

  async parseManualOTPInputElement() {
    return await this.page.$("#otp");
  }

  async parseCaptchaInputElement() {
    return await this.page.$("#captcha");
  }
}

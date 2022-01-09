import puppeteer from "puppeteer";

export default class PageInteractor {
  private readonly page: puppeteer.Page;
  private _fullyLoaded = false;

  constructor(page: puppeteer.Page) {
    this.page = page;
  }

  async login(id: string, password: string, delay?: number) {
    await this.page.waitForSelector("#id");
    await this.page.waitForSelector("#pw");

    await this.page.focus("#id");
    await this.page.keyboard.type(id, { delay: delay || 200 });
    await this.page.focus("#pw");
    await this.page.keyboard.type(password, { delay: delay || 200 });
    await this.page.click("#log\\.login");

    await this.page.waitForNavigation({ waitUntil: "domcontentloaded" });
    if (this.page.url().includes("https://nid.naver.com/nidlogin.login")) {
      throw new Error("Login failed");
    }
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

  async loadPaymentHistoryUntilPageEnds() {
    while (!this._fullyLoaded) {
      await this.loadMoreHistory();
    }
  }
}

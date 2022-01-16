import puppeteer from "puppeteer";

export default class PageInteractor {
  private readonly page: puppeteer.Page;
  private _fullyLoaded = false;

  constructor(page: puppeteer.Page) {
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
    await this.page.keyboard.type(id, { delay: delay || 200 });
    await this.page.focus("#pw");
    await this.page.keyboard.type(password, { delay: delay || 200 });
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

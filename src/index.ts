import puppeteer from "puppeteer";
import Payment from "types/payment";
import PAYMENT_HISTORY_STATUS from "types/paymentHistoryStatus";

class NaverPaymentHistoryService {
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
    await this.page.keyboard.type(this.id, { delay: 250 });
    await this.page.focus("#pw");
    await this.page.keyboard.type(this.password, { delay: 250 });
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

  private async parsePaymentElement(element: puppeteer.ElementHandle) {
    const { thumbnailUrl, title, priceString, statusString } = {
      thumbnailUrl: await element.$eval(
        'div[class^="PaymentList_thumb__"] > img',
        (el) => el.getAttribute("src")
      ),
      statusString: await element.$eval(
        'div[class^="PaymentList_status__"]',
        (el) => el.textContent
      ),
      priceString: await element.$eval(
        'div[class^="PaymentList_sum__"]',
        (el) => el.textContent
      ),
      title: await element.$eval(
        'strong[class^="PaymentList_name__"]',
        (el) => el.textContent
      ),
    };

    if (!(thumbnailUrl && title && priceString && statusString)) {
      console.error("parsePaymentElement: invalid element");
      return;
    }

    const price = +priceString.replace(/[^0-9]/g, "");
    const status: PAYMENT_HISTORY_STATUS = <PAYMENT_HISTORY_STATUS>statusString;

    const payment: Payment = { thumbnailUrl, title, price, status };

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

(async () => {
  const MOBILE_UA =
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1";
  const ID = "";
  const PASSWORD = "";

  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.setViewport({ height: 800, width: 1200 });
  await page.setUserAgent(MOBILE_UA);

  const naverPaymentHistoryService = new NaverPaymentHistoryService(
    page,
    ID,
    PASSWORD
  );

  await naverPaymentHistoryService.gotoLoginPage();
  await naverPaymentHistoryService.login();
  await naverPaymentHistoryService.gotoPaymentHistoryPage();
  await naverPaymentHistoryService.loadPaymentHistory();

  const history = naverPaymentHistoryService.history;

  console.log(history);
})();

import puppeteer from "puppeteer";

class NaverPaymentHistoryService {
  private readonly LOGIN_URL = "https://nid.naver.com/nidlogin.login";
  private readonly HISTORY_URL =
    "https://new-m.pay.naver.com/historybenefit/paymenthistory";

  private id: string;
  private password: string;
  private page: puppeteer.Page;

  constructor(page: puppeteer.Page, id: string, password: string) {
    this.page = page;
    this.id = id;
    this.password = password;
  }

  async gotoLoginPage() {}

  async login() {}

  async gotoPaymentHistoryPage() {}

  async getPaymentHistory() {}
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
  await page.setViewport({ height: 1920, width: 1080 });
  await page.setUserAgent(MOBILE_UA);

  const naverPaymentHistoryService = new NaverPaymentHistoryService(
    page,
    ID,
    PASSWORD
  );

  await naverPaymentHistoryService.gotoLoginPage();
  await naverPaymentHistoryService.login();
  await naverPaymentHistoryService.gotoPaymentHistoryPage();
  const result = await naverPaymentHistoryService.getPaymentHistory();
  console.log(result);
})();

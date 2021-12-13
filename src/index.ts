import puppeteer from "puppeteer";
import NaverPaymentHistoryService from "services/naver";

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
  await naverPaymentHistoryService.loadFullPaymentHistory();
  await naverPaymentHistoryService.parsePaymentHistory();
  console.log(naverPaymentHistoryService.history);
})();

import puppeteer from "puppeteer";
import { NaverApp } from "trackpurchase";

import readline from "readline";

const printNaverPayHistory = async (id: string, password: string) => {
  const MOBILE_UA =
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1";

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.setViewport({ height: 800, width: 1200 });
  await page.setUserAgent(MOBILE_UA);

  const module = NaverApp.ModuleFactory.create(page);
  const crawlService = new NaverApp.Service(module);

  await crawlService.login(id, password);

  const history = await crawlService.getHistory();
  console.log(history);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Naver ID: ", (id) => {
  rl.question("Naver Password: ", (password) => {
    printNaverPayHistory(id, password);
  });
});

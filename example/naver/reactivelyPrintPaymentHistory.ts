import puppeteer from "puppeteer";
import { NaverApp } from "trackpurchase";

import readline from "readline";
import { concat, defer, filter, from, tap } from "rxjs";
import { CaptchaStatus } from "trackpurchase/app/naver";

const printNaverPayHistory = async (id: string, password: string) => {
  const MOBILE_UA =
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1";

  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();
  await page.setViewport({ height: 800, width: 1200 });
  await page.setUserAgent(MOBILE_UA);

  const module = NaverApp.ModuleFactory.create(page);
  const crawlService = new NaverApp.Service(module);

  const loginEvent$ = crawlService.interactiveLogin(id, password, 100);
  const history$ = defer(() => from(crawlService.getHistory()));
  const closePage$ = defer(() => from(page.close()));
  const closeBrowser$ = defer(() => from(browser.close()));

  const final$ = concat(loginEvent$, history$, closePage$, closeBrowser$).pipe(
    tap((event) => {
      if (event === "otp-required") {
        console.log("스마트폰 앱에서 OTP 인증을 완료해주세요.");
      }
    }),
    tap((event) => {
      if (event === "manual-otp-required") {
        rl.question("otp code: ", async (code) => {
          module.pageInteractor.fillManualOTPInput(code);
        });
      }
    }),
    tap((event) => {
      function instanceOfCaptchaStatus(object: any): object is CaptchaStatus {
        if (object) {
          return "imageData" in object && "question" in object;
        }
        return false;
      }

      if (instanceOfCaptchaStatus(event)) {
        console.log(`encodedImage: ${event.imageData}`);
        console.log(`question: ${event.question}`);
        rl.question("captcha code: ", (code) => {
          module.pageInteractor.fillCaptchaInput(code, password);
        });
      }
    }),
    filter((event) => event instanceof Array)
  );
  final$.subscribe((event) => {
    console.log(event);
  });
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

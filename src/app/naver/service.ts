import { PaymentHistory } from "app/common";
import { CommonResponse } from "app/common/types/response";
import {
  concat,
  defer,
  distinctUntilChanged,
  from,
  interval,
  mergeMap,
  takeWhile,
} from "rxjs";
import { Module } from ".";

export default class Service {
  cookies?: string;
  constructor(private readonly module: Module) {
    this.module = module;
  }

  async normalLogin(id: string, password: string, delay?: number) {
    await this.module.urlChanger.moveToLoginURL();
    await this.module.pageInteractor.login(id, password, delay);
    this.cookies = await this.module.pageInteractor.getCookies();
  }

  interactiveLogin(id: string, password: string, delay?: number) {
    const login$ = defer(() => from(this.normalLogin(id, password, delay)));
    const loginStatus$ = interval(500)
      .pipe(mergeMap(() => this.module.pageInteractor.getLoginStatus()))
      .pipe(
        distinctUntilChanged(),
        takeWhile((loginStatus) => loginStatus !== "success")
      );
    const captchaStatus$ = interval(500)
      .pipe(mergeMap(() => this.module.pageInteractor.getCaptchaStatus()))
      .pipe(
        distinctUntilChanged((a, b) => a?.question === b?.question),
        takeWhile((captchaStatus) => captchaStatus !== null)
      );

    const result$ = concat(login$, captchaStatus$, loginStatus$);
    return result$;
  }

  private async isResponseValid(response: CommonResponse) {
    return response.status === 200;
  }
  private async getHistoryResult(response: CommonResponse) {
    if (!this.isResponseValid(response)) {
      throw new Error(`Invalid response: ${response.status} ${response.data}`);
    }
    const historyItems = this.module.parser.parsePaymentHistory(response.data);
    const infoForNextPaymentHistory =
      this.module.parser.parseInformationForNextPaymentHistory(response.data);
    return { historyItems, infoForNextPaymentHistory };
  }
  private async getAllPaymentHistories(cookies: string) {
    let historyItems: PaymentHistory[];
    let infoForNextPaymentHistory: {
      hasNext: boolean;
      lastHistoryId: string;
      lastHistoryDateTimestamp: number;
    };

    const firstResponse = await this.module.scraper.searchPaymentHistory(
      cookies
    );
    let firstResult = await this.getHistoryResult(firstResponse);
    historyItems = firstResult.historyItems;
    infoForNextPaymentHistory = firstResult.infoForNextPaymentHistory;
    // get the very first payment history items

    while (infoForNextPaymentHistory.hasNext) {
      const response = await this.module.scraper.nextPaymentHistory(
        cookies,
        infoForNextPaymentHistory.lastHistoryId,
        infoForNextPaymentHistory.lastHistoryDateTimestamp
      );
      const result = await this.getHistoryResult(response);
      historyItems = historyItems.concat(result.historyItems);
      infoForNextPaymentHistory = result.infoForNextPaymentHistory;
    }
    // get payment history continuously until hasNext is false, append it to historyItems

    return historyItems;
  }

  async getHistory() {
    if (!this.cookies) {
      throw new Error("Not logged in");
    }

    const paymentHistories = await this.getAllPaymentHistories(this.cookies);
    return paymentHistories;
  }
}

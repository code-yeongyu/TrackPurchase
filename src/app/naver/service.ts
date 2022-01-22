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
  constructor(private readonly module: Module) {
    this.module = module;
  }

  async normalLogin(id: string, password: string, delay?: number) {
    await this.module.urlChanger.moveToLoginURL();
    await this.module.pageInteractor.login(id, password, delay);
  }

  interactiveLogin(id: string, password: string, delay?: number) {
    const login$ = defer(() => from(this.normalLogin(id, password, delay)));
    const loginStatus$ = interval(500)
      .pipe(mergeMap(() => this.module.pageInteractor.getLoginStatus()))
      .pipe(
        distinctUntilChanged(),
        takeWhile((loginStatus) => loginStatus !== "success")
      );

    const result$ = concat(login$, loginStatus$);
    return result$;
  }

  async getHistory() {
    await this.module.urlChanger.moveToPaymentHistoryURL();
    await this.module.pageInteractor.loadPaymentHistoryUntilPageEnds();

    const paymentElements =
      await this.module.elementParser.parsePaymentElements();

    return await Promise.all(
      paymentElements.map((element) =>
        this.module.elementParser.parseElement(element)
      )
    );
  }
}

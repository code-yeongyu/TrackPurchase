import { NaverModule } from ".";

export default class Service {
  private readonly module: NaverModule;

  constructor(module: NaverModule) {
    this.module = module;
  }

  async login(id: string, password: string) {
    await this.module.urlChanger.moveToLoginURL();
    await this.module.pageInteractor.login(id, password);
  }

  async getHistory() {
    const history = [];
    await this.module.urlChanger.moveToPaymentHistoryURL();
    await this.module.pageInteractor.loadPaymentHistoryUntilPageEnds();

    const paymentElements =
      await this.module.elementParser.parsePaymentElements();
    for (const element of paymentElements) {
      const payment = await this.module.elementParser.parseElement(element);
      if (!payment) {
        continue;
      }
      history.push(payment);
    }

    return history;
  }
}

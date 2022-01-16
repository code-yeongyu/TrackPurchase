import { Module } from ".";

export default class Service {
  private readonly module: Module;

  constructor(module: Module) {
    this.module = module;
  }

  async login(id: string, password: string) {
    await this.module.urlChanger.moveToLoginURL();
    await this.module.pageInteractor.login(id, password);
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

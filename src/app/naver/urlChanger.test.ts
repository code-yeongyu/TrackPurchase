import URLChanger from "./urlChanger";

describe("Login", () => {
  it("Should move page to login", async () => {
    // given
    const urlChanger = new URLChanger(page);
    const pageSpy = jest.spyOn(page, "goto");

    // when
    await urlChanger.moveToLoginURL();

    // then
    expect(pageSpy).toHaveBeenCalledWith(urlChanger.loginURL);
  });
});

describe("PaymentHistory", () => {
  it("Should move page to payment history", async () => {
    // given
    const urlChanger = new URLChanger(page);
    const pageSpy = jest.spyOn(page, "goto");
    const waitForSelectorSpy = jest.spyOn(page, "waitForSelector");
    waitForSelectorSpy.mockImplementation(() => Promise.resolve(null));

    // when
    await urlChanger.moveToPaymentHistoryURL();

    // then
    expect(pageSpy).toHaveBeenCalledWith(urlChanger.paymentHistoryURL);
  });
});

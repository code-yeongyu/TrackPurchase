import PaymentElementParser from "./paymentElementParser";

function getWrappedHtml(htmlString: string) {
  return `<div>${htmlString}</div>`;
}

describe("Parse payment history", () => {
  let paymentElementParser: PaymentElementParser;
  beforeEach(() => {
    paymentElementParser = new PaymentElementParser();
  });
  it("Should not return 'purchasedAt' but with 'isAdditional' to be truthy if the product is '추가상품' ", async () => {
    // given
    const paymentNameHTML =
      '<div><strong class="PaymentList_name__3wYJ_">쿠키 1개</strong></div>';
    page.setContent(paymentNameHTML);
    const element = await page.$("div");
    if (element === null) {
      throw new Error("element is null");
    }
    const paymentElementParser = new PaymentElementParser(element);

    // when
    const name = await paymentElementParser.parseName();

    // then
    expect(name).toBe("쿠키 1개");
  });

  it("상품 가격을 가져옵니다", async () => {
    // given
    const paymentPriceHTML =
      '<div><div class="PaymentList_sum__Sj3M1">100원</div></div>';
    page.setContent(paymentPriceHTML);
    const element = await page.$("div");
    if (element === null) {
      throw new Error("element is null");
    }
    const paymentElementParser = new PaymentElementParser(element);

    // when
    const price = await paymentElementParser.parsePrice();

    // then
    expect(price).toBe("100원");
  });

  it("");
});

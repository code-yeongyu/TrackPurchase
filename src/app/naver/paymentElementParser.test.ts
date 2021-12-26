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
    const status = "결제완료";
    const productName = "쿠키 1개";
    const priceString = "100원";
    const imageURL = "https://example/example.png";
    const HTML = `
      <div class="PaymentList_item__1f1JH">
        <div class="PaymentList_status__2NgXs"><strong class="PaymentList_value__3sr7-">${status}</strong></div>
        <div class="PaymentList_product__2EZFY">
            <a href="!#" class="PaymentList_area-thumb__2J02B">
              <div class="PaymentList_thumb__2-nTA"><img src="${imageURL}" width="76" height="76" alt="${productName}"></div>
            </a>
            <div class="PaymentList_area-info__pK_nh">
              <a href="!#" class="PaymentList_info__1IHDx">
                  <div class="PaymentList_date__3mtOZ">
                    <span class="PaymentList_type-supplement__amOcE">
                        <span class="blind">추가상품</span>
                    </span>
                  </div>
                  <strong class="PaymentList_name__3wYJ_">${productName}</strong>
                  <div class="PaymentList_sum__Sj3M1">${priceString}</div>
              </a>
            </div>
        </div>
      </div>
    `;

    const wrappedHTML = getWrappedHtml(HTML);
    await page.setContent(wrappedHTML);
    const element = await page.$("div");
    if (element === null) {
      throw new Error("element is null");
    }

    // when
    const paymentHistory = await paymentElementParser.parse(element);

    // then
    expect(paymentHistory.name).toEqual(productName);
    expect(paymentHistory.price).toEqual(100);
    expect(paymentHistory.thumbnailURL).toEqual(imageURL);
    expect(paymentHistory.paymentStatus).toEqual(status);
    expect(paymentHistory.isAdditional).toBeTruthy();
    expect(paymentHistory.purchasedAt).toBeUndefined();
  });
  describe("Should return PaymentHistory", () => {
    it("When the date is current year", async () => {
      // given
      const status = "구매확정완료";
      const productName =
        "[병행]로지텍 K380 무선 블루투스 키보드(국내당일출고)";
      const priceString = "31,500원";
      const imageURL = "https://example/example.png";
      const dateString = "12. 17. 결제";
      const HTML = `
        <div class="PaymentList_item__1f1JH">
          <div class="PaymentList_status__2NgXs"><strong class="PaymentList_value__3sr7-">${status}</strong></div>
          <div class="PaymentList_product__2EZFY">
              <a href="!#" class="PaymentList_area-thumb__2J02B">
                <div class="PaymentList_thumb__2-nTA"><img src="${imageURL}" width="76" height="76" alt="${productName}"></div>
              </a>
              <div class="PaymentList_area-info__pK_nh">
                <a href="!#" class="PaymentList_info__1IHDx">
                    <div class="PaymentList_date__3mtOZ">${dateString}</div>
                    <strong class="PaymentList_name__3wYJ_">${productName}</strong>
                    <div class="PaymentList_sum__Sj3M1">${priceString}</div>
                </a>
              </div>
          </div>
        </div>
      `;
      const wrappedHTML = getWrappedHtml(HTML);
      await page.setContent(wrappedHTML);
      const element = await page.$("div");
      if (element === null) {
        throw new Error("element is null");
      }

      // when
      const paymentHistory = await paymentElementParser.parse(element);

      // then
      expect(paymentHistory.name).toEqual(productName);
      expect(paymentHistory.price).toEqual(31500);
      expect(paymentHistory.thumbnailURL).toEqual(imageURL);
      expect(paymentHistory.paymentStatus).toEqual(status);
      expect(paymentHistory.isAdditional).toBeFalsy();
      expect(paymentHistory.purchasedAt).not.toBeUndefined();

      const date = paymentHistory.purchasedAt;
      expect(date?.getFullYear()).toEqual(new Date().getFullYear());
      expect(date?.getMonth()).toEqual(11);
      expect(date?.getDate()).toEqual(17);
    });
    it("When the date is not current year", async () => {
      // given
      const status = "구매확정완료";
      const productName = "바세린 퓨어 스킨젤리 100ml x 3개";
      const priceString = "7,900원";
      const imageURL = "https://example/example.png";
      const dateString = "2020. 11. 27. 결제";
      const HTML = `
        <div class="PaymentList_item__1f1JH">
          <div class="PaymentList_status__2NgXs"><strong class="PaymentList_value__3sr7-">${status}</strong></div>
          <div class="PaymentList_product__2EZFY">
              <a href="!#" class="PaymentList_area-thumb__2J02B">
                <div class="PaymentList_thumb__2-nTA"><img src="${imageURL}" width="76" height="76" alt="${productName}"></div>
              </a>
              <div class="PaymentList_area-info__pK_nh">
                <a href="!#" class="PaymentList_info__1IHDx">
                    <div class="PaymentList_date__3mtOZ">${dateString}</div>
                    <strong class="PaymentList_name__3wYJ_">${productName}</strong>
                    <div class="PaymentList_sum__Sj3M1">${priceString}</div>
                </a>
              </div>
          </div>
        </div>
      `;
      const wrappedHTML = getWrappedHtml(HTML);
      await page.setContent(wrappedHTML);
      const element = await page.$("div");
      if (element === null) {
        throw new Error("element is null");
      }

      // when
      const paymentHistory = await paymentElementParser.parse(element);

      // then
      expect(paymentHistory.name).toEqual(productName);
      expect(paymentHistory.price).toEqual(7900);
      expect(paymentHistory.thumbnailURL).toEqual(imageURL);
      expect(paymentHistory.paymentStatus).toEqual(status);
      expect(paymentHistory.isAdditional).toBeFalsy();
      expect(paymentHistory.purchasedAt).not.toBeUndefined();

      const date = paymentHistory.purchasedAt;
      expect(date?.getFullYear()).toEqual(2020);
      expect(date?.getMonth()).toEqual(10);
      expect(date?.getDate()).toEqual(27);
    });
  });
});

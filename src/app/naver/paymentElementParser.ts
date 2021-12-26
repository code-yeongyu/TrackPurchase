import puppeteer from "puppeteer";
import PaymentHistory from "../common/paymentHistory";

export default class PaymentElementParser {
  private static async parseName(element: puppeteer.ElementHandle) {
    const name =
      (await element.$eval(
        'strong[class^="PaymentList_name__"]',
        (el) => el.textContent
      )) || "";
    return name;
  }

  private static async parsePrice(element: puppeteer.ElementHandle) {
    const priceString = await element.$eval(
      'div[class^="PaymentList_sum__"]',
      (el) => el.textContent
    );

    const price = +priceString.replace(/[^0-9]/g, "");

    return price;
  }

  private static async parseThumbnailUrl(element: puppeteer.ElementHandle) {
    const thumbnailURL = await element.$eval(
      'div[class^="PaymentList_thumb__"] > img',
      (el) => el.getAttribute("src")
    );
    return thumbnailURL !== null ? thumbnailURL : "";
  }

  private static async parsePaymentStatus(element: puppeteer.ElementHandle) {
    const paymentStatusString =
      (await element.$eval(
        'div[class^="PaymentList_status__"]',
        (el) => el.textContent
      )) || "";

    return paymentStatusString;
  }

  private static async parsePurchasedAtString(
    element: puppeteer.ElementHandle
  ) {
    const purchasedAtDateString =
      (await element.$eval(
        "div[class^='PaymentList_date__']",
        (el) => el.textContent
      )) || "";

    return purchasedAtDateString;
  }

  private static parsePurchasedAt(purchasedAtDateString: string) {
    let splittedByDot = purchasedAtDateString.split(".");
    if (splittedByDot.length === 1) {
      return;
    }
    splittedByDot = splittedByDot.slice(0, splittedByDot.length - 1);

    const isThisYear = splittedByDot.length == 2;

    if (isThisYear) {
      const year = 2021;
      const month = +splittedByDot[0].trim();
      const day = +splittedByDot[1].trim();
      return new Date(year, month - 1, day);
    }

    const year = +splittedByDot[0].trim();
    const month = +splittedByDot[1].trim();
    const day = +splittedByDot[2].trim();
    return new Date(year, month - 1, day);
  }

  private static parseIsAdditional(purchasedAtDateString: string) {
    return purchasedAtDateString.trim() === "추가상품";
  }

  async parse(element: puppeteer.ElementHandle) {
    const name = await PaymentElementParser.parseName(element);
    const price = await PaymentElementParser.parsePrice(element);
    const thumbnailURL = await PaymentElementParser.parseThumbnailUrl(element);
    const paymentStatus = await PaymentElementParser.parsePaymentStatus(
      element
    );
    const purchasedAtDateString =
      await PaymentElementParser.parsePurchasedAtString(element);

    const purchasedAt = PaymentElementParser.parsePurchasedAt(
      purchasedAtDateString
    );
    const isAdditional = PaymentElementParser.parseIsAdditional(
      purchasedAtDateString
    );

    const paymentHistory: PaymentHistory = {
      name,
      price,
      thumbnailURL,
      paymentStatus,
      purchasedAt,
      isAdditional,
    };
    return paymentHistory;
  }
}

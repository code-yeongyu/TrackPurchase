import puppeteer from "puppeteer";
import { PaymentHistory } from "../common";

export default class ElementParser {
  private static async parseName(element: puppeteer.ElementHandle) {
    const name =
      (await element.$eval(
        'strong[class^="PaymentList_name__"]',
        (el) => el.textContent
      )) || "";
    return name;
  }

  constructor(private readonly page: puppeteer.Page) {
    this.page = page;
  }

  private static async parsePrice(element: puppeteer.ElementHandle) {
    const priceString =
      (await element.$eval(
        'div[class^="PaymentList_sum__"]',
        (el) => el.textContent
      )) || "0";

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
      const year = new Date().getFullYear();
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

  async parsePaymentElements() {
    const elements = await this.page.$$(
      "div[class^='PaymentList_article__'] > ul > li"
    );
    return elements;
  }

  async parseElement(element: puppeteer.ElementHandle) {
    const [name, price, thumbnailURL, paymentStatus, purchasedAtDateString] =
      await Promise.all([
        ElementParser.parseName(element),
        ElementParser.parsePrice(element),
        ElementParser.parseThumbnailUrl(element),
        ElementParser.parsePaymentStatus(element),
        ElementParser.parsePurchasedAtString(element),
      ]);

    const purchasedAt = ElementParser.parsePurchasedAt(purchasedAtDateString);
    const isAdditional = ElementParser.parseIsAdditional(purchasedAtDateString);

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

  async parseManualOTPInputElement() {
    return await this.page.$("#otp");
  }
}

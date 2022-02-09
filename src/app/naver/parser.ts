import { PaymentHistory } from "app/common";
import { PaymentHistoryResponse } from "./types/paymentHistoryResponse";

export class NaverParser {
  parsePaymentHistory(jsonString: string): PaymentHistory[] {
    const data = JSON.parse(jsonString) as PaymentHistoryResponse;
    const items = data.result.items;
    const paymentHistories = items.map((item): PaymentHistory => {
      const name = item.product.name;
      const price = item.product.price;
      const thumbnailURL = item.product.imgUrl;
      const paymentStatus = item.status.text;
      const isAdditional = !!item.additionalData.isSupplemented;
      const purchasedAtTimestamp = item.date;
      const purchasedAt = new Date(purchasedAtTimestamp);
      return {
        name,
        price,
        thumbnailURL,
        paymentStatus,
        isAdditional,
        purchasedAt,
      };
    });
    return paymentHistories;
  }

  parseInformationForNextPaymentHistory(jsonString: string): {
    hasNext: boolean;
    lastHistoryId: string;
    lastHistoryDateTimestamp: number;
  } {
    const data = JSON.parse(jsonString) as PaymentHistoryResponse;

    const hasNext = data.result.hasNext;
    const lastHistoryId = data.result.lastId;
    const lastHistoryDateTimestamp = data.result.lastDate;
    return { hasNext, lastHistoryId, lastHistoryDateTimestamp };
  }
}

import PAYMENT_HISTORY_STATUS from "./paymentHistoryStatus";

export default interface Payment {
  readonly thumbnailUrl?: string;
  readonly title: string;
  readonly price: number;
  readonly status: PAYMENT_HISTORY_STATUS;
  readonly purchasedAtTimestamp?: number;
}

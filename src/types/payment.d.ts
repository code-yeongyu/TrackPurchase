import PAYMENT_HISTORY_STATUS from "./paymentHistoryStatus";

export default interface Payment {
  thumbnailUrl: string;
  title: string;
  price: number;
  status: PAYMENT_HISTORY_STATUS;
}

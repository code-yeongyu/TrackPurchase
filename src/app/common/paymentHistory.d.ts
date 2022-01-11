export default interface PaymentHistory {
  readonly name: string;
  readonly price: number;
  readonly thumbnailURL: string;
  readonly paymentStatus: string;
  readonly isAdditional: boolean;
  readonly purchasedAt?: Date;
}

export interface PaymentHistoryResponse {
  code: string;
  message: string;
  result: Result;
}

export interface Result {
  success: boolean;
  items: Item[];
  hasNext: boolean;
  lastDate: number;
  lastId: string;
}

export interface Item {
  _id: string;
  additionalData: AdditionalData;
  isHidden: boolean;
  oldTimelineId: string;
  serviceType: string;
  merchantNo: string;
  merchantName: string;
  status: Status;
  originalSearchText: string;
  product: Product;
  buttons: Buttons;
  date: number;
  orderDetailUrl: string;
  productDetailUrl: string;
  message: string;
  y;
  isRemove: boolean;
  deliveryProgress: DeliveryProgress;
}

export interface ReviewAccumulationAmount {
  textReviewAdmin: number;
  textReviewSeller: number;
  photoVideoReviewAdmin: number;
  photoVideoReviewSeller: number;
  afterUseTextReviewAdmin: number;
  afterUseTextReviewSeller: number;
  afterUsePhotoVideoReviewAdmin: number;
  afterUsePhotoVideoReviewSeller: number;
  storeCustomerReview: number;
}

export interface AdditionalData {
  saleChannelTypeCode: string;
  uniqueKey: string;
  orderNo: string;
  productNo: string;
  productOrderStatus: string;
  interlockDeliveryNo: string;
  isDeliveryTracking: boolean;
  isSupplemented: boolean;
  orderServiceType: string;
  isCafeSafePayment: boolean;
  deliveryMethodTypeCode: string;
  productOrderCount: number;
  orderAmount: number;
  isBranch: boolean;
  isReturnInsurance: boolean;
  usePendingYn: boolean;
  deliveryInterlockCompanyCode: string;
  membershipAccumulationAmount: number;
  purchaseAccumulationAmount: number;
  reviewAccumulationAmount: ReviewAccumulationAmount;
  isMembership: boolean;
  isReviewWrite?: boolean;
  purchaseDecidedAt?: number;
  serviceSeq: string;
  claimRequestedAt?: number;
  claimRequestReasonType: string;
  paymentMethod: string;
  cardCode: string;
  claimCompletedAt?: number;
  isAfterUseReviewWrite?: boolean;
  parentProductOrderNo: string;
}

export interface Status {
  name: string;
  text: string;
  color: string;
}

export interface Product {
  name: string;
  imgUrl: string;
  infoUrl: string;
  price: number;
  restAmount: number;
  pointPlus: boolean;
  isGift: boolean;
  myDataName: string;
}

export interface GetOrderDeliveryDetail {
  text: string;
  url: string;
}

export interface GetReceipt {
  text: string;
  url: string;
}

export interface RequestRefund {
  text: string;
  url: string;
}

export interface RequestExchange {
  text: string;
  url: string;
}

export interface CheckDelivery {
  text: string;
  url: string;
}

export interface ConfirmPurchase {
  name: string;
  text: string;
  url: string;
  purchaseAccumulationAmount: number;
}

export interface Repurchase {
  text: string;
  url: string;
}

export interface CustomerService {
  text: string;
  url: string;
}

export interface WriteAfterUseReview {
  text: string;
  url: string;
}

export interface Buttons {
  getOrderDeliveryDetail: GetOrderDeliveryDetail;
  getReceipt: GetReceipt;
  requestRefund: RequestRefund;
  requestExchange: RequestExchange;
  checkDelivery: CheckDelivery;
  confirmPurchase: ConfirmPurchase;
  repurchase: Repurchase;
  customerService: CustomerService;
  writeAfterUseReview: WriteAfterUseReview;
}

export interface ExposureTypeList {
  step: number;
  stepName: string;
  statusType: string;
  title: string;
  description: string;
  needDateInfo: boolean;
  needPlaceInfo: boolean;
}

export interface DeliveryProgress {
  currentExposureType: number;
  exposureTypeList: ExposureTypeList[];
}

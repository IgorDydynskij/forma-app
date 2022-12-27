export interface UserPurchases {
  userId: string;
  deliveryEmail: string;
  countryCode: string;
  packageId: string;
  packageDataSize: number,
  transactionId: string;
  paymentMethod: string;
  paymentAmount: number,
  purchaseDateMillis: number;
};
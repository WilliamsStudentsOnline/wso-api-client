export { GoodrichService } from '../generated/services/goodrich';

/** Client-side enums (not in OpenAPI). */
export namespace Goodrich {
  export enum OrderStatus {
    Unknown = 0,
    Placed,
    Ready,
    Paid,
  }
  export enum PaymentMethod {
    Unknown = 0,
    Swipe,
    Points,
    Cash,
    CreditCard,
    SwipePlusCash,
    SwipePlusCreditCard,
  }
}

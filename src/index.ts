// Type definitions for incart
// Definitions by: Kittiphat S <https://github.com/peatiscoding>

export interface Stock {
  sku: string
  qty: number | null
  productId: string
  stockType: string
}

export interface ShippingAddress {
  addressType: 'shipping'
  firstname?: string
  lastname?: string
  email?: string
  mobile?: string
  mobileCountryCode?: string
  street?: string
  subDistrict?: string
  district?: string
  province?: string
  country?: string
  postcode?: string
  weight?: string
  latitude?: string
  longitude?: string
}

export interface BillingAddress {
  addressType: 'billing'
  firstname?: string
  lastname?: string
  email?: string
  mobile?: string
  mobileCountryCode?: string
  street?: string
  subDistrict?: string
  district?: string
  province?: string
  country?: string
  postcode?: string
  weight?: string
  latitude?: string
  longitude?: string
  vatId: string
  company?: string
  companyBranch?: string
  companyBranchId?: string
}

export interface BaseOrderItem {
  sku: string
}

export interface OrderItem extends BaseOrderItem {
  orderId: number
  originalPrice: number
  name: string
  price: number
  priceInclTax: number
  rowTotal: number
  rowTotalInclTax: number
  rowTotalWithDiscount: number
  taxAmount: number
  taxBeforeDiscount: number
  taxPercent: number
  discountAmount: number
  discountPercent: number
  discountTaxCompensationAmount: number
  qty: number
  weight: number | null
  qtyOrdered: number
  newProductStockQty: number | null
  stockType: 'backorder' | 'infinite' | 'normal'
}

export interface OrderItemMDR extends BaseOrderItem {
  /**
   * This is merely a configuration applied to the Order NOT THE ACTUAL VALUE.
   */
  mdr: string | null
  /**
   * This is merely a configuration applied to the Order NOT THE ACTUAL VALUE.
   */
  mdrType: 'percent' | 'fixed'
  /**
   * This is merely a configuration applied to the Order NOT THE ACTUAL VALUE.
   */
  bank?: string
  /**
   * This is merely a configuration applied to the Order NOT THE ACTUAL VALUE.
   */
  installmentPeriod?: number
  /**
   * Per Line Item's discounted amount
   */
  itemDiscountAmount: number
}

export interface InCartOrderAppliedRule {
  action: 'by_fixed' | 'by_percent'
  /**
   * Serizliaed action
   */
  actionSerialized: string
  /**
   * 0 - for not applicable to shipping, 1 otherwise
   */
  applyToShipping: number
  /**
   * Serialized condition
   */
  condition: string
  /**
   * 
   */
  coupon: { id: number, code: string, couponUsage: [] }[]
  /**
   * Description
   */
  description: string | null
  /**
   * Discount value
   */
  discountAmount: number
  /**
   * primary key of ruleId
   */
  id: number
  /**
   * Boolean to denote if it is active or not
   */
  isActive: number
  /**
   * Coupon name
   */
  name: string
  /**
   * Type
   */
  type: 'manual'
}

export type InCartOrderStatus =
  | 'new'
  | 'payment_processing'
  | 'paid'
  | 'waiting_to_ship'
  | 'shipped'
  | 'arrived'
  | 'collected'
  | 'completed'
  | 'canceled'

export type InCartShippingType =
  | 'flatrate'
  | 'byItem'
  | 'byProvince'
  | 'byDistance'
  | 'byProvider'
  | 'pickup'

export interface InCartPublicUpdateOrderBasePayload {
  orderToken: string
  orderId: number
}

export interface InCartPublicUpdateStockEventPayload {
  event: 'updateStock'
  stocks: Stock[]
  updateIn: string
}
export interface InCartPublicPaidOrderEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'paidOrder'
  orderItems: OrderItemMDR[]
  couponCode: string | null
  inCartDiscountRules: InCartOrderAppliedRule[]
  wholeCartDiscountAmount: number
  shippingDiscountAmount: number
}

export interface InCartPublicCancelOrderEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'cancelOrder'    
}

export interface InCartPublicRefundOrderEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'refundOrder',
  paymentMethodId: number,
  actionOwner: string,
}

export interface InCartPublicUpdateOrderStatusEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'updateOrderStatus'
  orderStatus: InCartOrderStatus
}

export interface InCartPublicUpdateOrderShippingAddressEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'updateOrderShippingAddress'
  shippingAddress: ShippingAddress
  shippingCost: number
}

export interface InCartPublicUpdateOrderBillingAddressEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'updateOrderBillingAddress'
  billingAddress: BillingAddress
}

export interface InCartPublicDeleteOrderReferenceEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'deleteOrderReference'
}

export interface InCartPublicDeleteOrderBillingAddressEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'deleteOrderBillingAddress'
}

export interface InCartPublicDeleteOrderPaymentMethodEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'deleteOrderPaymentMethod'
}

export interface InCartPublicDeleteOrderShippingMethodEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'deleteOrderShippingMethod'
}

export interface InCartPublicUpdateOrderShippingMethodEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'updateOrderShippingMethod'
  shippingMethodId: number
  shippingMethodNameTH: string
  shippingMethodNameEN: string
  shippingCost: number
  shippingType: InCartShippingType
}

export interface InCartPublicUpdateOrderPaymentMethodEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'updateOrderPaymentMethod'
  paymentMethodId: number
}

export interface InCartPublicUpdateOrderReferenceEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'updateOrderReference'
  reference: string
}

export interface InCartPublicUpdateOrderShipmentEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'updateOrderShipment'
  trackNumber: string
  trackingUrl: string
}

export interface InCartPublicUpdateOrderCustomerNote
  extends InCartPublicUpdateOrderBasePayload {
  event: 'updateOrderCustomerNote'
  note: string | null
}

export interface InCartPublicUpdateOrderEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'updateOrder'
  customerName: string
  reference: string
  shippingMethodId: number
  shippingMethodNameTH: string
  shippingMethodNameEN: string
  paymentMethodId: number
  shippingCost: number
  shippingType: InCartShippingType
  shippingAddress: ShippingAddress
  billingAddress: BillingAddress
  orderItems: OrderItem[]
  orderStatus: InCartOrderStatus
  note: string | null
}

export type InCartPublicUpdateOrderAnyEventPayload =
  | InCartPublicPaidOrderEventPayload
  | InCartPublicUpdateOrderShippingAddressEventPayload
  | InCartPublicUpdateOrderBillingAddressEventPayload
  | InCartPublicDeleteOrderReferenceEventPayload
  | InCartPublicDeleteOrderBillingAddressEventPayload
  | InCartPublicDeleteOrderPaymentMethodEventPayload
  | InCartPublicDeleteOrderShippingMethodEventPayload
  | InCartPublicUpdateOrderShippingMethodEventPayload
  | InCartPublicUpdateOrderPaymentMethodEventPayload
  | InCartPublicUpdateOrderReferenceEventPayload
  | InCartPublicUpdateOrderStatusEventPayload
  | InCartPublicCancelOrderEventPayload
  | InCartPublicRefundOrderEventPayload
  | InCartPublicUpdateOrderShipmentEventPayload
  | InCartPublicUpdateOrderCustomerNote
  | InCartPublicUpdateOrderEventPayload

export type InCartPublicHookPayload =
  | InCartPublicUpdateStockEventPayload
  | InCartPublicUpdateOrderAnyEventPayload

export interface InCartPublicEvent {
  storeId: string
  payloads: InCartPublicHookPayload[]
}

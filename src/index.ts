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

export interface OrderItem {
  orderId: number
  sku: string
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

export type InCartOrderStatus =
  | 'payment_processing'
  | 'paid'
  | 'waiting_to_ship'
  | 'shipped'
  | 'arrived'
  | 'collected'
  | 'completed'
  | 'canceled'

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
}

export interface InCartPublicCancelOrderEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'cancelOrder'    
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

export interface InCartPublicDeleteOrderBillingAddressEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'deleteOrderBillingAddress'
}

export interface InCartPublicUpdateOrderShippingMethodEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'updateOrderShippingMethod'
  shippingMethodId: number
  shippingCost: number
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

export interface InCartPublicUpdateOrderEventPayload
  extends InCartPublicUpdateOrderBasePayload {
  event: 'updateOrder'
  customerName: string
  reference: string
  shippingMethodId: number
  paymentMethodId: number
  shippingCost: number
  shippingAddress: ShippingAddress
  billingAddress: BillingAddress
  orderItems: OrderItem[]
  orderStatus: InCartOrderStatus
}

export type InCartPublicUpdateOrderAnyEventPayload =
  | InCartPublicPaidOrderEventPayload
  | InCartPublicUpdateOrderShippingAddressEventPayload
  | InCartPublicUpdateOrderBillingAddressEventPayload
  | InCartPublicDeleteOrderBillingAddressEventPayload
  | InCartPublicUpdateOrderShippingMethodEventPayload
  | InCartPublicUpdateOrderPaymentMethodEventPayload
  | InCartPublicUpdateOrderReferenceEventPayload
  | InCartPublicUpdateOrderStatusEventPayload
  | InCartPublicCancelOrderEventPayload
  | InCartPublicUpdateOrderEventPayload

export type InCartPublicHookPayload =
  | InCartPublicUpdateStockEventPayload
  | InCartPublicUpdateOrderAnyEventPayload

export interface InCartPublicEvent {
  storeId: string
  payloads: InCartPublicHookPayload[]
}

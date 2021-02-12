export type IncartPublicHookEventType =
  | 'customerRegister'
  | 'createOrder'
  | 'cancelOrder'
  | 'updateOrder'
  | 'updateStock'
  | 'paidOrder'
  | 'sendNotification'

export interface Stock {
  sku: string
  qty: number | null
  productId: string
  stockType: string
}

export interface InCartPublicUpdateStockData {
  stocks: Stock[]
  updateIn: string
}
export interface InCartPublicUpdateStockEventPayload {
  data: InCartPublicUpdateStockData[]
  event: 'updateStock'
}

export interface InCartPublicPaidOrderData {
  orderToken: string
  orderId: number
}

export interface InCartPublicPaidOrderEventPayload {
  data: InCartPublicPaidOrderData[]
  event: 'paidOrder'
}

export type IncartPublicHookPayload = InCartPublicUpdateStockEventPayload | InCartPublicPaidOrderEventPayload
export interface InCartPublicEvent {
  storeId: string
  payloads: IncartPublicHookPayload[]
}

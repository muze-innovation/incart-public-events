// Type definitions for incart
// Definitions by: Kittiphat S <https://github.com/peatiscoding>

export interface InCartPublicBaseEvent {
  storeId: string
}

export interface Stock {
  sku: string
  qty: number | null
  productId: string
  stockType: string
}

export interface InCartPublicUpdateStockEventPayload {
  stocks: Stock[]
  updateIn: string
}

export interface InCartPublicUpdateStocksEvent extends InCartPublicBaseEvent {
  payloads: InCartPublicUpdateStockEventPayload[]
  event: 'updateStock'
}

export interface InCartPublicUpdateOrderEventPayload {
  //
}

export interface InCartPublicUpdateOrdersEvent extends InCartPublicBaseEvent {
  payloads: InCartPublicUpdateOrderEventPayload[]
  event: 'updateOrder'
}

export type InCartPublicEvent = InCartPublicUpdateStocksEvent
  | InCartPublicUpdateOrdersEvent

// Type definitions for incart
// Definitions by: Kittiphat S <https://github.com/peatiscoding>

export interface InCartPublicBaseEvent {
  storeId: string
}

export interface InCartPublicUpdateStockEventPayload {
  
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

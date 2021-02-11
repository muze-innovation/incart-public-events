export interface InCartPublicBaseEvent {
    storeId: string;
}
export interface InCartPublicUpdateStockEventPayload {
}
export interface InCartPublicUpdateStocksEvent extends InCartPublicBaseEvent {
    payloads: InCartPublicUpdateStockEventPayload[];
    event: 'updateStock';
}
export interface InCartPublicUpdateOrderEventPayload {
}
export interface InCartPublicUpdateOrdersEvent extends InCartPublicBaseEvent {
    payloads: InCartPublicUpdateOrderEventPayload[];
    event: 'updateOrder';
}
export declare type InCartPublicEvent = InCartPublicUpdateStocksEvent | InCartPublicUpdateOrdersEvent;

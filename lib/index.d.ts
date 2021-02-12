export interface Stock {
    sku: string;
    qty: number | null;
    productId: string;
    stockType: string;
}
export interface InCartPublicUpdateStockEventPayload {
    event: 'updateStock';
    stocks: Stock[];
    updateIn: string;
}
export interface InCartPublicPaidOrderEventPayload {
    event: 'paidOrder';
    orderToken: string;
    orderId: number;
}
export declare type IncartPublicHookPayload = InCartPublicUpdateStockEventPayload | InCartPublicPaidOrderEventPayload;
export interface InCartPublicEvent {
    storeId: string;
    payloads: IncartPublicHookPayload[];
}

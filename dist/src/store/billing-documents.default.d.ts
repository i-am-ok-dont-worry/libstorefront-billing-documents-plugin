import { BillingDocument } from '../types';
export declare const BillingDocumentsDefaultState: BillingDocumentsModuleState;
export interface BillingDocumentsModuleState {
    items: BillingDocument[];
    current: BillingDocument;
}

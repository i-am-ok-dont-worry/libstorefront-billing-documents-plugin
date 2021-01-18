import { BillingDocument } from '../types';

export const BillingDocumentsDefaultState: BillingDocumentsModuleState = {
    items: [],
    current: null
};

export interface BillingDocumentsModuleState {
    items: BillingDocument[],
    current: BillingDocument
}

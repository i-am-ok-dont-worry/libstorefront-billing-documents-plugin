import { BillingDocument, BillingDocumentType } from '../types';

export const BillingDocumentsDefaultState: BillingDocumentsModuleState = {
    items: [],
    current: null,
    types: {}
};

export interface BillingDocumentsModuleState {
    items: BillingDocument[],
    current: BillingDocument,
    types: Record<string, BillingDocumentType>
}

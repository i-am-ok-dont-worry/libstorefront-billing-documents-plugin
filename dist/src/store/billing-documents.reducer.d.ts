import { BillingDocumentsModuleState } from './billing-documents.default';
import { AnyAction } from '@grupakmk/libstorefront/dist/src/state-management/types/action';
import { BillingDocumentType } from '../types';
export declare const billingDocumentsReducer: (state: BillingDocumentsModuleState, action: AnyAction) => {
    items: any;
    current: import("../types").BillingDocument;
    types: Record<string, BillingDocumentType>;
} | {
    current: any;
    items: import("../types").BillingDocument[];
    types: Record<string, BillingDocumentType>;
} | {
    items: import("../types").BillingDocument[];
    current: import("../types").BillingDocument;
    types: any;
};

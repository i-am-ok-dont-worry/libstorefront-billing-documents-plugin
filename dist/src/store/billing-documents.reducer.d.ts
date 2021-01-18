import { BillingDocumentsModuleState } from './billing-documents.default';
import { AnyAction } from '@grupakmk/libstorefront/dist/src/state-management/types/action';
export declare const billingDocumentsReducer: (state: BillingDocumentsModuleState, action: AnyAction) => {
    items: any;
    current: import("../types").BillingDocument;
} | {
    current: any;
    items: import("../types").BillingDocument[];
};

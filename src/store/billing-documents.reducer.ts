import { BillingDocumentsDefaultState, BillingDocumentsModuleState } from './billing-documents.default';
import { AnyAction } from '@grupakmk/libstorefront/dist/src/state-management/types/action';
import { BillingDocumentsActions } from './billing-documents.actions';

export const billingDocumentsReducer = (state: BillingDocumentsModuleState, action: AnyAction) => {
    switch (action.type) {
        case BillingDocumentsActions.SET_BILLING_DOCUMENTS: {
            return { ...state, items: action.payload || [] };
        }
        case BillingDocumentsActions.SET_CURRENT: {
            return { ...state, current: action.payload };
        }
        default: return state || BillingDocumentsDefaultState;
    }
}

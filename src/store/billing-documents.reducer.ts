import { BillingDocumentsDefaultState, BillingDocumentsModuleState } from './billing-documents.default';
import { AnyAction } from '@grupakmk/libstorefront/dist/src/state-management/types/action';
import { BillingDocumentsActions } from './billing-documents.actions';
import { BillingDocumentType } from '../types';

export const billingDocumentsReducer = (state: BillingDocumentsModuleState, action: AnyAction) => {
    switch (action.type) {
        case BillingDocumentsActions.SET_BILLING_DOCUMENTS: {
            return { ...state, items: action.payload || [] };
        }
        case BillingDocumentsActions.SET_CURRENT: {
            return { ...state, current: action.payload };
        }
        case BillingDocumentsActions.LOAD_TYPE: {
            const typesMap = (action.payload || []).reduce((acc, next: BillingDocumentType) => {
                return { ...acc, [next.type_id]: next };
            }, {});
            let items = state.items;
            let current = state.current;

            if (state.items.length) {
                items = state.items.map(i => ({ ...i, type: typesMap[i.type_id] }));
            }
            if (state.current) {
                current.type = typesMap[current.type_id];
            }

            return { ...state, items, current, types: typesMap };
        }
        default: return state || BillingDocumentsDefaultState;
    }
}

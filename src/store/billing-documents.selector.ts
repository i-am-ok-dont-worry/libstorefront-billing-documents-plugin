import { createSelector } from 'reselect';
import { BillingDocumentsActions } from './billing-documents.actions';

export const getBillingType = (typeId: string) => createSelector([(state) => state[BillingDocumentsActions.SN_BILLING_DOCUMENTS].types], (types) => {
    return types[typeId];
});

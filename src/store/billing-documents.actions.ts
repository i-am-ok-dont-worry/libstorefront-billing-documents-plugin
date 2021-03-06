import {BillingDocument, BillingDocumentType} from '../types';

export namespace BillingDocumentsActions {
    export const SN_BILLING_DOCUMENTS = 'billingDocuments';

    export const SET_BILLING_DOCUMENTS = SN_BILLING_DOCUMENTS + '/SET_BILLING_DOCUMENTS';
    export const setBillingDocuments = (documents: BillingDocument[]) => ({
        type: SET_BILLING_DOCUMENTS,
        payload: documents
    });

    export const SET_CURRENT = SN_BILLING_DOCUMENTS + '/SET_CURRENT';
    export const setCurrentBillingDocument = (document: BillingDocument) => ({
        type: SET_CURRENT,
        payload: document
    });

    export const LOAD_TYPE = SN_BILLING_DOCUMENTS + '/LOAD_TYPES';
    export const loadDocumentTypes = (types: BillingDocumentType[]) => ({
       type: LOAD_TYPE,
       payload: types
    });
}

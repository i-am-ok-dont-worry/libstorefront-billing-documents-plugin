import { BillingDocument, BillingDocumentType } from '../types';
export declare namespace BillingDocumentsActions {
    const SN_BILLING_DOCUMENTS = "billingDocuments";
    const SET_BILLING_DOCUMENTS: string;
    const setBillingDocuments: (documents: BillingDocument[]) => {
        type: string;
        payload: BillingDocument[];
    };
    const SET_CURRENT: string;
    const setCurrentBillingDocument: (document: BillingDocument) => {
        type: string;
        payload: BillingDocument;
    };
    const LOAD_TYPE: string;
    const loadDocumentTypes: (types: BillingDocumentType[]) => {
        type: string;
        payload: BillingDocumentType[];
    };
}

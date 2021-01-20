import { SearchCriteriaFilter } from '@grupakmk/libstorefront';
export declare namespace BillingDocumentsThunks {
    const getBillingDocuments: (filter: SearchCriteriaFilter) => (dispatch: any, getState: any) => Promise<any[]>;
    const getBillingDocument: (entityId: string) => (dispatch: any, getState: any) => Promise<any>;
    const loadBillingDocumentTypes: () => (dispatch: any, getState: any) => Promise<any[]>;
    const downloadBillingDocument: (entityId: string) => (dispatch: any, getState: any) => Promise<void>;
}

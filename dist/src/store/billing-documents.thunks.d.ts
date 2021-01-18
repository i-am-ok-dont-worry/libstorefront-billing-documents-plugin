import { SearchCriteriaFilter } from '@grupakmk/libstorefront';
export declare namespace BillingDocumentsThunks {
    const getBillingDocuments: (filter: SearchCriteriaFilter) => (dispatch: any, getState: any) => Promise<any>;
    const getBillingDocument: (entityId: string) => (dispatch: any, getState: any) => Promise<any>;
    const getBillingDocumentTypes: (filter: SearchCriteriaFilter) => (dispatch: any, getState: any) => Promise<any>;
    const getBillingDocumentType: (typeId: string) => (dispatch: any, getState: any) => Promise<any>;
}

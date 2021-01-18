import { SearchCriteriaFilter, Task, TaskQueue } from '@grupakmk/libstorefront';
export declare class BillingDocumentsDao {
    private taskQueue;
    getBillingDocuments({ customerId, pageSize, currentPage, sortBy, sortDir }: {
        customerId: string;
    } & SearchCriteriaFilter, token: string, storeCode?: string): Promise<Task>;
    getBillingDocument(entityId: any, token: string, storeCode?: string): Promise<Task>;
    getBillingDocumentTypes({ customerId, pageSize, currentPage, sortBy, sortDir }: {
        customerId: string;
    } & SearchCriteriaFilter, token: string, storeCode?: string): Promise<Task>;
    getBillingDocumentType(typeId: string, token: string, storeCode?: string): Promise<Task>;
    constructor(taskQueue: TaskQueue);
}

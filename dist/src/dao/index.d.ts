import { SearchCriteriaFilter, Task, TaskQueue } from '@grupakmk/libstorefront';
export declare class BillingDocumentsDao {
    private taskQueue;
    getBillingDocuments({ customerId, pageSize, currentPage, sortBy, sortDir }: {
        customerId: string;
    } & SearchCriteriaFilter, token: string, storeCode?: string): Promise<Task>;
    getBillingDocument(entityId: any, token: string, storeCode?: string): Promise<Task>;
    getBillingDocumentTypes(token: string, storeCode?: string): Promise<Task>;
    getBillingDocumentType(typeId: string, token: string, storeCode?: string): Promise<Task>;
    downloadDocument(entityId: string, token: string, storeCode?: string): Promise<{
        status: number;
        type: string;
        url: string;
        body: any;
        headers: any;
        blob: () => any;
    }>;
    constructor(taskQueue: TaskQueue);
}

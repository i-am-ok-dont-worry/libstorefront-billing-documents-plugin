import { SearchCriteriaFilter, Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';
import { injectable, inject } from 'inversify';
import qs from 'query-string';

@injectable()
export class BillingDocumentsDao {

    public getBillingDocuments ({ customerId, pageSize, currentPage, sortBy, sortDir }: { customerId: string } & SearchCriteriaFilter, token: string, storeCode?: string): Promise<Task> {
        const query = {
            pageSize,
            currentPage,
            sortBy,
            sortDir,
            token,
            storeCode
        };

        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/billing-documents/' + customerId + '?' + qs.stringify(query)),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public getBillingDocument (entityId, token: string, storeCode?: string,): Promise<Task> {
        const query = {
            token,
            storeCode
        };
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/billing-documents/single/' + entityId + '?' + qs.stringify(query)),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public getBillingDocumentTypes ({ customerId, pageSize, currentPage, sortBy, sortDir }: { customerId: string } & SearchCriteriaFilter, token: string, storeCode?: string): Promise<Task> {
        const query = {
            pageSize,
            currentPage,
            sortBy,
            sortDir,
            token,
            storeCode
        };

        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/billing-documents/type/' + customerId + '?' + qs.stringify(query)),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public getBillingDocumentType (typeId: string, token: string, storeCode?: string): Promise<Task> {
        const query = {
            token,
            storeCode
        };
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/billing-documents/type/single/' + typeId + '?' + qs.stringify(query)),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public constructor(@inject(TaskQueue) private taskQueue: TaskQueue) {}
}

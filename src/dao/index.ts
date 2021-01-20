import { SearchCriteriaFilter, Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';
import { injectable, inject } from 'inversify';
import qs from 'query-string';
import fetch from 'isomorphic-fetch';

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

    public getBillingDocumentTypes (token: string, storeCode?: string): Promise<Task> {
        const query = {
            token,
            storeCode
        };

        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/billing-documents/type' + '?' + qs.stringify(query)),
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

    public downloadDocument (entityId: string, token: string, storeCode?: string): Promise<{ status: number, type: string, url: string, body: any, headers: any, blob: () => any }> {
        const query = {
            token,
            storeCode
        };

        return fetch(
            URLTransform.getAbsoluteApiUrl('/api/vendor/billing-documents/file/' + entityId + '?' + qs.stringify(query)),
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            }
        );
    }

    public constructor(@inject(TaskQueue) private taskQueue: TaskQueue) {}
}

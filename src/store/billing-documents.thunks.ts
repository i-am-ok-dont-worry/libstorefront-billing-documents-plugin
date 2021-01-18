import {
    AbstractStore,
    HttpStatus,
    IOCContainer,
    Logger,
    SearchCriteriaFilter,
    StoreViewHandler
} from '@grupakmk/libstorefront';
import { BillingDocumentsDao } from '../dao';
import { BillingDocumentsActions } from './billing-documents.actions';

export namespace BillingDocumentsThunks {
    export const getBillingDocumnets = (filter: SearchCriteriaFilter) => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const token = customer.token;
            const storeCode = StoreViewHandler.currentStoreView().general.store_code;

            if (!customer || !token || !customer.current) { throw new Error('Cannot fetch documents for unauthorized user'); }
            const customerId = customer.current.id;
            const response = await IOCContainer.get(BillingDocumentsDao).getBillingDocuments({ customerId, ...filter }, token, storeCode);

            if (response && response.code === HttpStatus.OK) {
                const { items } = response.result;
                const docs = items instanceof Array ? items[0] : items;
                await dispatch(BillingDocumentsActions.setBillingDocuments(docs));

                return docs;
            } else {
                throw new Error('Not found');
            }
        } catch (e) {
            Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e.message);
            throw e;
        }
    }

    export const getBillingDocument = (entityId: string) => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const token = customer.token;
            const storeCode = StoreViewHandler.currentStoreView().general.store_code;

            if (!customer || !token || !customer.current) { throw new Error('Cannot fetch documents for unauthorized user'); }
            const customerId = customer.current.id;
            const response = await IOCContainer.get(BillingDocumentsDao).getBillingDocument(entityId, token, storeCode);

            if (response && response.code === HttpStatus.OK) {
                const document = response.result;
                await dispatch(BillingDocumentsActions.setCurrentBillingDocument(document));

                return document;
            } else {
                throw new Error('Not found');
            }
        } catch (e) {
            Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e.message);
            throw e;
        }
    };

    export const getBillingDocumentTypes = (filter: SearchCriteriaFilter) => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const token = customer.token;
            const storeCode = StoreViewHandler.currentStoreView().general.store_code;

            if (!customer || !token || !customer.current) { throw new Error('Cannot fetch documents types for unauthorized user'); }
            const customerId = customer.current.id;
            const response = await IOCContainer.get(BillingDocumentsDao).getBillingDocumentTypes({ customerId, ...filter }, token, storeCode);

            if (response && response.code === HttpStatus.OK) {
                const { items } = response.result;
                const docs = items instanceof Array ? items[0] : items;

                return docs;
            } else {
                throw new Error('Not found');
            }
        } catch (e) {
            Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e.message);
            throw e;
        }
    };

    export const getBillingDocumentType = (typeId: string) => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const token = customer.token;
            const storeCode = StoreViewHandler.currentStoreView().general.store_code;

            if (!customer || !token || !customer.current) { throw new Error('Cannot fetch documents types for unauthorized user'); }
            const response = await IOCContainer.get(BillingDocumentsDao).getBillingDocumentType(typeId, token, storeCode);

            if (response && response.code === HttpStatus.OK) {
                const docType = response.result;
                return docType;
            } else {
                throw new Error('Not found');
            }
        } catch (e) {
            Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e.message);
            throw e;
        }
    };
}

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
import { getBillingType } from './billing-documents.selector';

export namespace BillingDocumentsThunks {
    export const getBillingDocuments = (filter: SearchCriteriaFilter) => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const token = customer.token;
            const storeCode = StoreViewHandler.currentStoreView().general.store_code;

            if (!customer || !token || !customer.current) { throw new Error('Cannot fetch documents for unauthorized user'); }
            const customerId = customer.current.id;
            const response = await IOCContainer.get(BillingDocumentsDao).getBillingDocuments({ customerId, ...filter }, token, storeCode);

            if (response && response.code === HttpStatus.OK) {
                const { items } = response.result;
                let docs = items instanceof Array ? items : [items];
                docs = docs.map(doc => ({ ...doc, type: getBillingType(doc.type_id)(getState()) }));

                await dispatch(BillingDocumentsActions.setBillingDocuments(docs));

                return docs;
            } else {
                throw new Error('Not found');
            }
        } catch (e) {
            Logger.info('Cannot fetch store credits: ', 'billing-documents-plugin', e.message);
            throw e;
        }
    }

    export const getBillingDocument = (entityId: string) => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const token = customer.token;
            const storeCode = StoreViewHandler.currentStoreView().general.store_code;

            if (!customer || !token || !customer.current) { throw new Error('Cannot fetch documents for unauthorized user'); }
            const response = await IOCContainer.get(BillingDocumentsDao).getBillingDocument(entityId, token, storeCode);

            if (response && response.code === HttpStatus.OK) {
                const document = response.result;
                document.type = getBillingType(document.type_id)(getState());
                await dispatch(BillingDocumentsActions.setCurrentBillingDocument(document));

                return document;
            } else {
                throw new Error('Not found');
            }
        } catch (e) {
            Logger.info('Cannot fetch store credits: ', 'billing-documents-plugin', e.message);
            throw e;
        }
    };

    export const loadBillingDocumentTypes = () => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const token = customer.token;
            const storeCode = StoreViewHandler.currentStoreView().general.store_code;

            if (!customer || !token || !customer.current) { throw new Error('Cannot fetch documents types for unauthorized user'); }
            const response = await IOCContainer.get(BillingDocumentsDao).getBillingDocumentTypes(token, storeCode);

            if (response && response.code === HttpStatus.OK) {
                const { items } = response.result;
                const docs = items instanceof Array ? items : [items];
                await dispatch(BillingDocumentsActions.loadDocumentTypes(docs));

                return docs;
            } else {
                throw new Error('Not found');
            }
        } catch (e) {
            Logger.info('Cannot load types: ', 'billing-documents-plugin', e.message);
            throw e;
        }
    }
}

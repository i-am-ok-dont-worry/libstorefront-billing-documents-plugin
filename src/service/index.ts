import { injectable, inject } from 'inversify';
import { AbstractStore, LibstorefrontInnerState, SearchCriteriaFilter } from '@grupakmk/libstorefront';
import { BillingDocumentsThunks } from '../store/billing-documents.thunks';
import { BillingDocument, BillingDocumentType } from '../types';

@injectable()
export class BillingDocumentsService {

    /**
     * Returns list of customer billing documents
     * Customer must be authorized to fetch credits
     * @options {SearchCriteriaFilter} Query filter
     * @returns {Promise<StoreCredit>}
     */
    public getBillingDocuments ({ sortBy, sortDir, pageSize, currentPage }: SearchCriteriaFilter = {}): Promise<BillingDocument[]> {
        return this.store.dispatch(BillingDocumentsThunks.getBillingDocumnets({ sortBy, sortDir, pageSize, currentPage }));
    }

    /**
     * Returns billing document details
     * @param {string} storeCreditId
     * @returns {StoreCredit} Store credit
     */
    public getBillingDocument (storeCreditId: string): Promise<BillingDocument> {
        return this.store.dispatch(BillingDocumentsThunks.getBillingDocument(storeCreditId));
    }

    /**
     * Returns list of billing document types
     * @param {number} amount
     * @returns {Promise<void>}
     */
    public getBillingDocumentTypes ({ sortBy, sortDir, pageSize, currentPage }: SearchCriteriaFilter = {}): Promise<BillingDocumentType[]> {
        return this.store.dispatch(BillingDocumentsThunks.getBillingDocumentTypes({ sortBy, sortDir, pageSize, currentPage }));
    }

    /**
     * Returns billing document type details
     * @returns {Promise<BillingDocumentType>}
     */
    public getBillingDocumentType (typeId: string): Promise<BillingDocumentType> {
        return this.store.dispatch(BillingDocumentsThunks.getBillingDocumentType(typeId));
    }

    public constructor (@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}
}

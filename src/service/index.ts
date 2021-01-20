import { injectable, inject } from 'inversify';
import { AbstractStore, LibstorefrontInnerState, SearchCriteriaFilter } from '@grupakmk/libstorefront';
import { BillingDocumentsThunks } from '../store/billing-documents.thunks';
import { BillingDocument } from '../types';
import {BillingDocumentsDao} from "../dao";

@injectable()
export class BillingDocumentsService {

    /**
     * Returns list of customer billing documents
     * Customer must be authorized to fetch credits
     * @options {SearchCriteriaFilter} Query filter
     * @returns {Promise<StoreCredit>}
     */
    public getBillingDocuments ({ sortBy, sortDir, pageSize, currentPage }: SearchCriteriaFilter = {}): Promise<BillingDocument[]> {
        return this.store.dispatch(BillingDocumentsThunks.getBillingDocuments({ sortBy, sortDir, pageSize, currentPage }));
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
     * Downloads entity file via Blob
     * @param entityId
     */
    public async downloadDocument (entityId: string) {
        this.store.dispatch(BillingDocumentsThunks.downloadBillingDocument(entityId));
    }

    public constructor (@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {
        this.store.dispatch(BillingDocumentsThunks.loadBillingDocumentTypes());
    }
}

import { AbstractStore, LibstorefrontInnerState, SearchCriteriaFilter } from '@grupakmk/libstorefront';
import { BillingDocument } from '../types';
export declare class BillingDocumentsService {
    private store;
    /**
     * Returns list of customer billing documents
     * Customer must be authorized to fetch credits
     * @options {SearchCriteriaFilter} Query filter
     * @returns {Promise<StoreCredit>}
     */
    getBillingDocuments({ sortBy, sortDir, pageSize, currentPage }?: SearchCriteriaFilter): Promise<BillingDocument[]>;
    /**
     * Returns billing document details
     * @param {string} storeCreditId
     * @returns {StoreCredit} Store credit
     */
    getBillingDocument(storeCreditId: string): Promise<BillingDocument>;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}

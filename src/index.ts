import { createLibstorefrontModule, HookType, LibStorefront } from '@grupakmk/libstorefront';
import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import { BillingDocumentsDao } from './dao';
import { BillingDocumentsService } from './service';
import { billingDocumentsReducer } from './store/billing-documents.reducer';
import { BillingDocumentsDefaultState } from './store/billing-documents.default';

/**
 * Plugin for handling customer billing documents
 * A billing document is created for a credit memo, debit memo, an invoice or a cancelled transaction.
 */
export const BillingDocumentsPlugin = ((libstorefront: LibStorefront) => {
    libstorefront.getIOCContainer().bind<BillingDocumentsDao>(BillingDocumentsDao).to(BillingDocumentsDao);
    libstorefront.getIOCContainer().bind<BillingDocumentsService>(BillingDocumentsService).to(BillingDocumentsService);
    libstorefront.listenTo(HookType.AfterCoreModulesRegistered, (lsf: LibStorefront) => {
        lsf.registerModule(createLibstorefrontModule('billingDocuments', billingDocumentsReducer, BillingDocumentsDefaultState));
    });
}) as LibstorefrontPlugin;

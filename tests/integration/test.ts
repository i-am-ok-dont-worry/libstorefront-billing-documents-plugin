import { LibStorefront } from '@grupakmk/libstorefront';
import { BillingDocumentsPlugin } from '../../src';
import { BillingDocumentsService } from '../../src/service';

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [
        BillingDocumentsPlugin
    ]
}, 'http://localhost:9001');

(async () => {
    await LSF.UserService.login('test@grupakmk.pl', 'Testowe2!');
    LSF.get(BillingDocumentsService).getBillingDocument(3)
        .then(res => {
            debugger
        })
        .catch(err => {
            debugger;
        });

})();

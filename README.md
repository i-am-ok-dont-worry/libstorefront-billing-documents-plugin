# Libstorefront Billing documents plugin
A billing document is created for a credit memo, debit memo, an invoice or a cancelled transaction. 
Each billing document has a header and list of items under it.

## Usage
To use plugin add a dependency to the LSF lib:
```javascript
const LSF = new LibStorefront({
    plugins: [
        BillingDocumentsPlugin
    ]
});
```

and get `BillingDocumentsService` registered by lib:
```javascript
LSF.get(BillingDocumentsService)
```
## Model
Plugin adds new type `BillingDocument`:
```javascript
interface BillingDocument {
    entity_id: number,
    created_at: string,
    type_id: number,
    customer_id: number,
    customer_email: string,
    order_id: number,
    number: string,
    status: string,
    issue_date: string,
    settlement_date: string,
    total_price: number,
    total_tax: number,
    total_price_incl: number,
    file_name: string,
    file_url: string,
    file_type: string,
    file_hash_name: string,
    file_size: number,
    first_download_at: string,
    last_download_at: string,
    downloads: number,
    extension_attributes: Record<string, string | number>,
    type?: BillingDocumentType
}
```

## Service
Plugin registers the [BillingDocumentsService](https://gitlab.grupakmk.pl/internal/frontend/api/addons/libstorefront-addons/libstorefront-store-credit-plugin/-/blob/master/src/service/index.ts) that serves as a plugin entry point.
Service exposes methods:
* `getBillingDocuments ({ sortBy, sortDir, pageSize, currentPage }: SearchCriteriaFilter): Promise<BillingDocument[]>` - returns billing documents for current user
* `getBillingDocument (entityId: string): Promise<BillingDocument>` - returns billing document details

## Redux store 
Plugin adds new state branch `billingDocuments` to the original Libstorefront redux store.
```javascript
interface BillingDocumentsModuleState {
    items: BillingDocument[],
    current: BillingDocument,
    types: Record<string, BillingDocumentType>
}
```

## Test plugin
Plugin must be tested in isolation. Unit tests can be performed via jest framework
in `/tests/test.ts` file.
Template includes by default mocked LocalStorage object.

export interface BillingDocument {
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

export interface BillingDocumentType {
    type_id: number,
    type_code: string,
    type_name: string
}

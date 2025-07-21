export type PaymentInitData = RequiredPaymentFields & Partial<OptionalPaymentFields>;

export interface StoreIntTypes {
    store_id: string;
    store_passwd: string;
}

interface RequiredPaymentFields {
    total_amount: string | number;
    currency: string;
    tran_id: string;
    product_category: string;
    success_url: string;
    fail_url: string;
    cancel_url: string;
    cus_name: string;
    cus_email: string;
    cus_add1: string;
    cus_city: string;
    cus_postcode: string;
    cus_country: string;
    cus_phone: string;
    shipping_method: "YES" | "NO" | "Courier";
    num_of_item: number;
    product_name: string;
    product_profile: "general" | "physical-goods" | "non-physical-goods" | "airline-tickets" | "travel-vertical" | "telecom-vertical";
}

interface OptionalPaymentFields {
    cus_state?: string;
    ipn_url?: string;
    multi_card_name?: string;
    allowed_bin?: string;
    emi_option?: number;
    emi_max_inst_option?: number | string;
    emi_selected_inst?: number | string;
    cus_add2?: string;
    cus_fax?: string;
    ship_name?: string;
    shipcity?: string;
    ship_add1?: string;
    ship_add2?: string;
    ship_city?: string;
    ship_state?: string;
    ship_postcode?: string;
    ship_country?: string;
    hours_till_departure?: string;
    flight_type?: string;
    pnr?: string;
    journey_from_to?: string;
    third_party_booking?: string;
    hotel_name?: string;
    length_of_stay?: string;
    check_in_time?: string;
    hotel_city?: string;
    product_type?: string;
    topup_number?: string;
    country_topup?: string;
    cart?: string;
    product_amount?: string | number;
    discount_amount?: string | number;
    convenience_fee?: string | number;
    value_a?: string;
    value_b?: string;
    value_c?: string;
    value_d?: string;
}

export interface PaymentInitResponse {
    status: "FAILED" | "SUCCESS";
    failedreason?: string;
    sessionkey?: string;
    gw?: {
        visa?: string;
        master?: string;
        amex?: string;
        othercards?: string;
        internetbanking?: string;
        mobilebanking?: string;
    };
    redirectGatewayURL?: string;
    directPaymentURLBank?: string;
    directPaymentURLCard?: string;
    directPaymentURL?: string;
    redirectGatewayURLFailed?: string;
    GatewayPageURL?: string;
    storeBanner?: string;
    storeLogo?: string;
    store_name?: string;
    desc?: any[];
}

export interface PaymentValidationResponse {
    status: "VALID" | "VALIDATED" | "INVALID_TRANSACTION";
    tran_date: string;
    tran_id: string;
    val_id: string;
    amount: string | number;
    store_amount: string | number;
    currency: string;
    bank_tran_id: string;
    card_type: string;
    card_no: string;
    card_issuer: string;
    card_brand: string;
    card_issuer_country: string;
    card_issuer_country_code: string;
    currency_type: string;
    currency_amount: string | number;
    currency_rate: string;
    base_fair: string;
    value_a: string;
    value_b: string;
    value_c: string;
    value_d: string;
    emi_instalment: string;
    emi_amount: string | number;
    emi_description: string;
    emi_issuer: string;
    account_details: string;
    risk_title: string;
    risk_level: string;
    APIConnect: string;
    validated_on: string;
    gw_version: string;
}
export interface PaymentRefundInitiateResponse {
    APIConnect: "INVALID_REQUEST" | "FAILED" | "INACTIVE" | "DONE";
    bank_tran_id: string;
    trans_id: string;
    refund_ref_id: string;
    status: "success" | "failed" | "processing";
    errorReason: string;
}


export interface PaymentRefundQueryResponse {
    APIConnect: "INVALID_REQUEST" | "FAILED" | "INACTIVE" | "DONE";
    bank_tran_id: string;
    tran_id: string;
    refund_ref_id: string;
    initiated_on: string;
    refunded_on: string;
    status: "refunded" | "processing" | "cancelled";
    errorReason: string;
}

export interface TransactionQuerySessionIdResponse {
    APIConnect: "INVALID_REQUEST" | "FAILED" | "INACTIVE" | "DONE";
    status: "VALID" | "VALIDATED" | "PENDING" | "FAILED";
    sessionkey: string;
    tran_date: string;
    tran_id: string;
    val_id: string;
    amount: string;
    store_amount: string;
    bank_tran_id: string;
    card_type: string;
    card_no: string;
    card_issuer: string;
    card_brand: string;
    card_issuer_country: string;
    card_issuer_country_code: string;
    currency_type: string;
    currency_amount: string;
    currency_rate: string;
    base_fair: string;
    value_a: string;
    value_b: string;
    value_c: string;
    value_d: string;
    risk_title: string;
    risk_level: string;
    validated_on: string;
    gw_version: string;
}

export interface TransactionQueryTransIdResponse {
    APIConnect: "INVALID_REQUEST" | "FAILED" | "INACTIVE" | "DONE";
    no_of_trans_found: number;
    element: TransactionQueryTransIdResponseArray[];
}

export interface TransactionQueryTransIdResponseArray {
    val_id: string;
    status: string;
    validated_on: string;
    currency_type: string;
    currency_amount: string;
    currency_rate: string;
    base_fair: string;
    value_a: string;
    value_b: string;
    value_c: string;
    value_d: string;
    tran_date: string;
    tran_id: string;
    amount: string;
    store_amount: string;
    bank_tran_id: string;
    card_type: string;
    risk_title: string;
    risk_level: string;
    currency: string;
    bank_gw: string;
    card_no: string;
    card_issuer: string;
    card_brand: string;
    card_issuer_country: string;
    card_issuer_country_code: string;
    gw_version: string;
    emi_instalment: string;
    emi_amount: string;
    emi_description: string;
    emi_issuer: string;
    error: string;
}
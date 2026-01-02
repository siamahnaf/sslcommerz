import { httpCall } from "./httpCall";
import { paymentInitData } from "./init.data";
import { PaymentInitData, PaymentInitResponse, PaymentValidationResponse, PaymentRefundInitiateResponse, PaymentRefundQueryResponse, TransactionQuerySessionIdResponse, TransactionQueryTransIdResponse } from "./types";

interface ValidatePayload {
    val_id: string;
}

interface RefundPayload {
    refund_amount: number | string;
    refund_remarks: string;
    bank_tran_id: string;
    refe_id: string;
}

interface RefundQueryPayload {
    refund_ref_id: string;
}

interface TransactionQueryBySessionPayload {
    sessionkey: string;
}

interface TransactionQueryByTranIdPayload {
    tran_id: string;
}

export class SslCommerz {
    private store_id: string;
    private store_passwd: string;
    private baseURL: string;
    private initURL: string;
    private validationURL: string;
    private refundURL: string;
    private refundQueryURL: string;
    private transactionQueryBySessionIdURL: string;
    private transactionQueryByTransactionIdURL: string;

    constructor(store_id: string, store_passwd: string, live = false) {
        this.baseURL = `https://${live ? "securepay" : "sandbox"}.sslcommerz.com`;
        this.initURL = this.baseURL + "/gwprocess/v4/api.php";
        this.validationURL = this.baseURL + "/validator/api/validationserverAPI.php?";
        this.refundURL = this.baseURL + "/validator/api/merchantTransIDvalidationAPI.php?";
        this.refundQueryURL = this.baseURL + "/validator/api/merchantTransIDvalidationAPI.php?";
        this.transactionQueryBySessionIdURL = this.baseURL + "/validator/api/merchantTransIDvalidationAPI.php?";
        this.transactionQueryByTransactionIdURL = this.baseURL + "/validator/api/merchantTransIDvalidationAPI.php?";

        this.store_id = store_id;
        this.store_passwd = store_passwd;
    }

    init(data: PaymentInitData) {
        return httpCall<PaymentInitResponse>({
            url: this.initURL,
            method: "POST",
            data: paymentInitData({ ...data, store_id: this.store_id, store_passwd: this.store_passwd }),
        });
    }

    validate(data: ValidatePayload) {
        const requestUrl =
            `${this.validationURL}val_id=${data.val_id}&store_id=${this.store_id}&store_passwd=${this.store_passwd}&v=1&format=json`;

        return httpCall<PaymentValidationResponse>({ url: requestUrl, method: "GET" });
    }

    initiateRefund(data: RefundPayload) {
        const requestUrl =
            `${this.refundURL}refund_amount=${data.refund_amount}&refund_remarks=${data.refund_remarks}&bank_tran_id=${data.bank_tran_id}&refe_id=${data.refe_id}&store_id=${this.store_id}&store_passwd=${this.store_passwd}&v=1&format=json`;

        return httpCall<PaymentRefundInitiateResponse>({ url: requestUrl, method: "GET" });
    }

    refundQuery(data: RefundQueryPayload) {
        const requestUrl =
            `${this.refundQueryURL}refund_ref_id=${data.refund_ref_id}&store_id=${this.store_id}&store_passwd=${this.store_passwd}&v=1&format=json`;

        return httpCall<PaymentRefundQueryResponse>({ url: requestUrl, method: "GET" });
    }

    transactionQueryBySessionId(data: TransactionQueryBySessionPayload) {
        const requestUrl =
            `${this.transactionQueryBySessionIdURL}sessionkey=${data.sessionkey}&store_id=${this.store_id}&store_passwd=${this.store_passwd}&v=1&format=json`;

        return httpCall<TransactionQuerySessionIdResponse>({ url: requestUrl, method: "GET" });
    }

    transactionQueryByTransactionId(data: TransactionQueryByTranIdPayload) {
        const requestUrl =
            `${this.transactionQueryByTransactionIdURL}tran_id=${data.tran_id}&store_id=${this.store_id}&store_passwd=${this.store_passwd}&v=1&format=json`;

        return httpCall<TransactionQueryTransIdResponse>({ url: requestUrl, method: "GET" });
    }
}

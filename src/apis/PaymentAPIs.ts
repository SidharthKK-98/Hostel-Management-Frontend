import {type PaymentOrder, type PaymentParams } from "@/Types/paymentTypes";
import commonAPI from "./commonAPI";

export const createPayment=(payload:PaymentParams)=>{

    return commonAPI<PaymentOrder>("POST","payment/create",payload)
}
import express from "express";
import { InitiateSession, ExecutePayment, GetPaymentStatus, GetBookingStatus, captureAuthorizedPayment, releaseAuthorizedPayment, PaymentWebhook } from "../../controllers/payment/payment.controller.js";

const router = express.Router();


router.post("/initiateSession", InitiateSession);
router.post("/execute-payment", ExecutePayment);
router.post("/paymentWebhook", PaymentWebhook);
router.post("/paymentStatus", GetPaymentStatus);
router.post("/bookingStatus", GetBookingStatus);
router.post("/captureAmount", captureAuthorizedPayment);
router.post("/releaseAmount", releaseAuthorizedPayment);


export default router;
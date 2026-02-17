import { Router } from 'express';
import { createPaymentRequest, getUserPayments, getPayment } from '../controllers/payment.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

// Protected routes
router.post('/', authenticate, createPaymentRequest); // Create payment
router.get('/', authenticate, getUserPayments); // Get user's payment history
router.get('/:id', authenticate, getPayment); // Get specific payment

export default router;
import express from 'express';
import {
  createOrder,
  getOrder,
  getUserOrders,
  getVendorOrders,
  updateOrderStatus
} from '../controllers/orders.js';
import { auth, vendorAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createOrder);
router.get('/:id', auth, getOrder);
router.get('/user/:userId', auth, getUserOrders);
router.get('/vendor/:vendorId', vendorAuth, getVendorOrders);
router.patch('/:id/status', vendorAuth, updateOrderStatus);

export default router;
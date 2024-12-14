import express from 'express';
import {
  createVendorProfile,
  getVendorProfile,
  updateVendorProfile,
  submitVerification,
  getVendorStats
} from '../controllers/vendors.js';
import { auth, vendorAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/profile', auth, createVendorProfile);
router.get('/profile/:vendorId', getVendorProfile);
router.put('/profile', vendorAuth, updateVendorProfile);
router.post('/verify', vendorAuth, submitVerification);
router.get('/stats', vendorAuth, getVendorStats);

export default router;
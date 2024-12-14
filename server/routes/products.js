import express from 'express';
import { 
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getVendorProducts
} from '../controllers/products.js';
import { auth, vendorAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', vendorAuth, createProduct);
router.put('/:id', vendorAuth, updateProduct);
router.delete('/:id', vendorAuth, deleteProduct);
router.get('/vendor/:vendorId', getVendorProducts);

export default router;
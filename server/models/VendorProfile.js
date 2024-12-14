import mongoose from 'mongoose';

const vendorProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  storeName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  logo: String,
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  website: String,
  categories: [{
    type: String
  }],
  verified: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 0
  },
  totalSales: {
    type: Number,
    default: 0
  },
  walletAddress: {
    type: String,
    required: true
  },
  documents: {
    businessRegistration: String,
    taxId: String,
    governmentId: String,
    addressProof: String
  }
}, {
  timestamps: true
});

export default mongoose.model('VendorProfile', vendorProfileSchema);
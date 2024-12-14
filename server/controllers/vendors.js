import { StatusCodes } from 'http-status-codes';
import VendorProfile from '../models/VendorProfile.js';
import User from '../models/User.js';

export const createVendorProfile = async (req, res) => {
  // Check if vendor profile already exists
  const existingProfile = await VendorProfile.findOne({ userId: req.user.id });
  if (existingProfile) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      error: 'Vendor profile already exists'
    });
  }

  req.body.userId = req.user.id;
  const vendorProfile = await VendorProfile.create(req.body);

  // Update user's vendor status
  await User.findByIdAndUpdate(req.user.id, { isVendor: true });

  res.status(StatusCodes.CREATED).json({
    success: true,
    vendorProfile
  });
};

export const getVendorProfile = async (req, res) => {
  const vendorProfile = await VendorProfile.findOne({ userId: req.params.vendorId });

  if (!vendorProfile) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      error: 'Vendor profile not found'
    });
  }

  res.status(StatusCodes.OK).json({
    success: true,
    vendorProfile
  });
};

export const updateVendorProfile = async (req, res) => {
  const vendorProfile = await VendorProfile.findOneAndUpdate(
    { userId: req.user.id },
    req.body,
    { new: true, runValidators: true }
  );

  if (!vendorProfile) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      error: 'Vendor profile not found'
    });
  }

  res.status(StatusCodes.OK).json({
    success: true,
    vendorProfile
  });
};

export const submitVerification = async (req, res) => {
  const vendorProfile = await VendorProfile.findOne({ userId: req.user.id });

  if (!vendorProfile) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      error: 'Vendor profile not found'
    });
  }

  vendorProfile.verificationStatus = 'pending';
  vendorProfile.verificationDocuments = req.body.documents;
  vendorProfile.verificationSubmittedAt = Date.now();

  await vendorProfile.save();

  res.status(StatusCodes.OK).json({
    success: true,
    verificationStatus: vendorProfile.verificationStatus
  });
};

export const getVendorStats = async (req, res) => {
  // Implement vendor statistics logic
  const stats = {
    totalSales: 2500,
    totalOrders: 150,
    averageOrderValue: 16.67,
    totalProducts: 45,
    activeProducts: 40,
    totalCustomers: 120,
    rating: 4.8,
    reviewCount: 95
  };

  res.status(StatusCodes.OK).json({
    success: true,
    stats
  });
};
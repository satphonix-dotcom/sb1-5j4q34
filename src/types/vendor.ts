export type VerificationStatus = 'unverified' | 'pending' | 'verified' | 'rejected';

export interface VendorProfile {
  id: string;
  userId: string;
  storeName: string;
  description: string;
  logo?: string;
  coverImage?: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
  email: string;
  website?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  categories: string[];
  verificationStatus: VerificationStatus;
  verificationDocuments?: {
    businessRegistration?: string;
    taxId?: string;
    governmentId?: string;
    addressProof?: string;
  };
  verificationSubmittedAt?: number;
  verificationApprovedAt?: number;
  verificationRejectedReason?: string;
  walletAddresses: {
    btc?: string;
    eth?: string;
  };
  createdAt: number;
  updatedAt: number;
}

export interface VendorStats {
  totalSales: number;
  totalOrders: number;
  averageOrderValue: number;
  totalProducts: number;
  activeProducts: number;
  totalCustomers: number;
  rating: number;
  reviewCount: number;
}
import { VendorProfile, VerificationStatus, VendorStats } from '../types/vendor';

class VendorService {
  private static instance: VendorService;
  
  private constructor() {}

  static getInstance(): VendorService {
    if (!VendorService.instance) {
      VendorService.instance = new VendorService();
    }
    return VendorService.instance;
  }

  async getVendorProfile(vendorId: string): Promise<VendorProfile | null> {
    // In a real app, this would be an API call
    const vendors = this.getStoredVendors();
    return vendors.find(v => v.id === vendorId) || null;
  }

  async updateVendorProfile(vendorId: string, updates: Partial<VendorProfile>): Promise<VendorProfile> {
    const vendors = this.getStoredVendors();
    const index = vendors.findIndex(v => v.id === vendorId);
    
    if (index === -1) {
      throw new Error('Vendor not found');
    }

    vendors[index] = {
      ...vendors[index],
      ...updates,
      updatedAt: Date.now()
    };

    localStorage.setItem('vendors', JSON.stringify(vendors));
    return vendors[index];
  }

  async submitVerification(
    vendorId: string,
    documents: Record<string, string>
  ): Promise<VerificationStatus> {
    const vendors = this.getStoredVendors();
    const index = vendors.findIndex(v => v.id === vendorId);
    
    if (index === -1) {
      throw new Error('Vendor not found');
    }

    vendors[index] = {
      ...vendors[index],
      verificationStatus: 'pending',
      verificationDocuments: documents,
      verificationSubmittedAt: Date.now()
    };

    localStorage.setItem('vendors', JSON.stringify(vendors));
    return vendors[index].verificationStatus;
  }

  async getVendorStats(vendorId: string): Promise<VendorStats> {
    // In a real app, this would calculate real stats from the database
    return {
      totalSales: 2500,
      totalOrders: 150,
      averageOrderValue: 16.67,
      totalProducts: 45,
      activeProducts: 40,
      totalCustomers: 120,
      rating: 4.8,
      reviewCount: 95
    };
  }

  private getStoredVendors(): VendorProfile[] {
    const stored = localStorage.getItem('vendors');
    return stored ? JSON.parse(stored) : [];
  }
}

export const vendorService = VendorService.getInstance();
import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Users, TrendingUp, Gift, ChevronRight } from 'lucide-react';
import { AffiliateStats } from '../components/affiliate/AffiliateStats';
import { AffiliateHowItWorks } from '../components/affiliate/AffiliateHowItWorks';
import { AffiliateCommissions } from '../components/affiliate/AffiliateCommissions';
import { AffiliateFAQ } from '../components/affiliate/AffiliateFAQ';

export const Affiliate: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Earn Crypto with Our Affiliate Program
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Join our affiliate program and earn cryptocurrency for every successful referral.
          Start earning today with competitive commission rates.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/affiliate/register" className="btn">
            Become an Affiliate
            <ChevronRight className="h-5 w-5 ml-2" />
          </Link>
          <Link to="/affiliate/login" className="btn-secondary">
            Affiliate Login
          </Link>
        </div>
      </div>

      <AffiliateStats />
      <AffiliateHowItWorks />
      <AffiliateCommissions />
      <AffiliateFAQ />
    </div>
  );
}
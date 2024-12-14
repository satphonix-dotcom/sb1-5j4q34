import React from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdvertiseHero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden mb-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]" />
      </div>
      <div className="relative px-6 py-16 sm:px-12 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-6">
            Reach Crypto-Savvy Customers
          </h1>
          <p className="text-xl text-indigo-100 mb-8">
            Connect with millions of cryptocurrency enthusiasts and early adopters.
            Launch targeted advertising campaigns and grow your business in the crypto space.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/advertise/create" className="btn bg-white text-indigo-600 hover:bg-indigo-50">
              Start Advertising
              <ChevronRight className="h-5 w-5 ml-2" />
            </Link>
            <Link to="/advertise/case-studies" className="btn bg-indigo-500 text-white hover:bg-indigo-400">
              View Success Stories
              <TrendingUp className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
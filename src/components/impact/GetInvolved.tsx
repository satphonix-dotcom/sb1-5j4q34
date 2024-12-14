import React from 'react';
import { Link } from 'react-router-dom';

export const GetInvolved: React.FC = () => {
  return (
    <div className="bg-indigo-600 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Get Involved</h2>
      <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
        Join us in building a more inclusive digital economy. Whether you're a business
        looking to expand or an individual wanting to make a difference, there's a place
        for you in our community.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/vendor/onboarding" className="btn bg-white text-indigo-600 hover:bg-indigo-50">
          Become a Vendor
        </Link>
        <Link to="/community" className="btn bg-indigo-500 text-white hover:bg-indigo-400">
          Join Community
        </Link>
      </div>
    </div>
  );
};
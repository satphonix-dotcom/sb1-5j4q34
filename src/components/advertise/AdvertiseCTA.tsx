import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const AdvertiseCTA: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">
        Ready to Start Advertising?
      </h2>
      <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
        Join leading brands and start reaching crypto-savvy customers today.
        Our team is here to help you create successful advertising campaigns.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/advertise/create" className="btn bg-white text-indigo-600 hover:bg-indigo-50">
          Get Started
          <ArrowRight className="h-5 w-5 ml-2" />
        </Link>
        <Link to="/contact" className="btn bg-indigo-500 text-white hover:bg-indigo-400">
          Talk to Sales
          <MessageCircle className="h-5 w-5 ml-2" />
        </Link>
      </div>
    </div>
  );
};
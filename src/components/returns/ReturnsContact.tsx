import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export const ReturnsContact: React.FC = () => {
  return (
    <div className="bg-indigo-50 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Need Help with Your Return?
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Our customer service team is here to help you with any questions about returns or refunds.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6">
          <MessageCircle className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
          <p className="text-gray-600">Chat with our support team</p>
        </div>
        <div className="bg-white rounded-lg p-6">
          <Mail className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-gray-600">returns@velvetcoin.com</p>
        </div>
        <div className="bg-white rounded-lg p-6">
          <Phone className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
          <p className="text-gray-600">1-800-RETURNS</p>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Search, HelpCircle, Book, MessageCircle, Phone, Wallet, Package } from 'lucide-react';

export const Help: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      topics: [
        'Creating an Account',
        'Payment Methods',
        'Browsing Products',
        'Making Your First Purchase'
      ]
    },
    {
      title: 'Orders & Shipping',
      icon: Package,
      topics: [
        'Order Status',
        'Shipping Methods',
        'Tracking Orders',
        'Returns & Refunds'
      ]
    },
    {
      title: 'Payments & Wallet',
      icon: Wallet,
      topics: [
        'Supported Cryptocurrencies',
        'Connecting Your Wallet',
        'Payment Security',
        'Transaction Issues'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Help Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">How can we help you?</h1>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for help..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {helpCategories.map(({ title, icon: Icon, topics }) => (
          <div key={title} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Icon className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            </div>
            <ul className="space-y-3">
              {topics.map((topic) => (
                <li key={topic}>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    {topic}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <MessageCircle className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
          <p className="text-gray-600 mb-4">Chat with our support team</p>
          <button className="btn w-full">Start Chat</button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Phone className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
          <p className="text-gray-600 mb-4">Call us at +1 (555) 123-4567</p>
          <button className="btn w-full">Call Now</button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <HelpCircle className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Help Center</h3>
          <p className="text-gray-600 mb-4">Browse our knowledge base</p>
          <button className="btn w-full">Visit Help Center</button>
        </div>
      </div>
    </div>
  );
};
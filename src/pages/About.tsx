import React from 'react';
import { Shield, Globe, Users, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About VelvetCoin</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Revolutionizing e-commerce with secure cryptocurrency payments and a global marketplace
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To create a seamless and secure e-commerce platform that bridges the gap between
            traditional shopping and cryptocurrency payments, making digital currency transactions
            accessible to everyone.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become the world's leading crypto-first e-commerce platform, fostering a global
            community of buyers and sellers who embrace the future of digital payments.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose VelvetCoin</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              Advanced blockchain technology ensures your transactions are safe and secure
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Globe className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Marketplace</h3>
            <p className="text-gray-600">
              Connect with buyers and sellers from around the world
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community First</h3>
            <p className="text-gray-600">
              Built by and for the crypto community
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <TrendingUp className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              Constantly evolving to provide the best shopping experience
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((member) => (
            <div key={member} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-${1500000000000 + member}?w=500`}
                alt="Team member"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
                <p className="text-gray-600">Co-founder & CEO</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-indigo-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Join the Revolution</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Be part of the future of e-commerce. Start shopping with cryptocurrency today
          and experience the difference.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/register" className="btn">
            Create Account
          </Link>
          <Link to="/vendor/onboarding" className="btn-secondary">
            Become a Seller
          </Link>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { ShippingHero } from '../components/shipping/ShippingHero';
import { ShippingMethods } from '../components/shipping/ShippingMethods';
import { ShippingCalculator } from '../components/shipping/ShippingCalculator';
import { ShippingPolicies } from '../components/shipping/ShippingPolicies';
import { ShippingFAQ } from '../components/shipping/ShippingFAQ';
import { ShippingTracking } from '../components/shipping/ShippingTracking';

export const Shipping: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ShippingHero />
      <ShippingMethods />
      <ShippingCalculator />
      <ShippingPolicies />
      <ShippingTracking />
      <ShippingFAQ />
    </div>
  );
};
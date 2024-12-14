import React from 'react';
import { AdvertiseHero } from '../components/advertise/AdvertiseHero';
import { AdvertiseMetrics } from '../components/advertise/AdvertiseMetrics';
import { AdvertiseOptions } from '../components/advertise/AdvertiseOptions';
import { AdvertisePricing } from '../components/advertise/AdvertisePricing';
import { AdvertiseTestimonials } from '../components/advertise/AdvertiseTestimonials';
import { AdvertiseCTA } from '../components/advertise/AdvertiseCTA';

export const Advertise: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AdvertiseHero />
      <AdvertiseMetrics />
      <AdvertiseOptions />
      <AdvertisePricing />
      <AdvertiseTestimonials />
      <AdvertiseCTA />
    </div>
  );
};
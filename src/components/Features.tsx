import React from 'react';
import { Shield, Truck, Box } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Guaranteed safe transactions'
    },
    {
      icon: Truck,
      title: 'Verified Delivery',
      description: 'Tracked shipping worldwide'
    },
    {
      icon: Box,
      title: 'Authentic Products',
      description: 'Certified genuine items'
    }
  ];

  return (
    <div className="bg-velvet-dark border-t border-velvet-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-center justify-center">
              <Icon className="h-8 w-8 text-velvet-accent mr-4" />
              <div>
                <h3 className="font-heading font-heading2 text-velvet-light">
                  {title}
                </h3>
                <p className="text-velvet-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Users } from 'lucide-react';

export const ImpactPartners: React.FC = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Our Impact Partners
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((partner) => (
          <div
            key={partner}
            className="h-20 bg-white rounded-lg shadow-md flex items-center justify-center"
          >
            <Users className="h-8 w-8 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};
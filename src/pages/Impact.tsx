import React from 'react';
import { ImpactHero } from '../components/impact/ImpactHero';
import { ImpactStats } from '../components/impact/ImpactStats';
import { Initiative } from '../components/impact/Initiative';
import { CommunityStory } from '../components/impact/CommunityStory';
import { GetInvolved } from '../components/impact/GetInvolved';
import { ImpactPartners } from '../components/impact/ImpactPartners';

export const Impact: React.FC = () => {
  const stats = [
    {
      value: '100K+',
      label: 'Users Empowered'
    },
    {
      value: '$10M+',
      label: 'Economic Impact'
    },
    {
      value: '50+',
      label: 'Community Partners'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ImpactHero />
      <ImpactStats stats={stats} />

      <div className="space-y-12 mb-16">
        {/* Add initiatives */}
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Community Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <CommunityStory
              key={id}
              id={id}
              imageUrl={`https://images.unsplash.com/photo-${1500000000000 + id}?w=500`}
            />
          ))}
        </div>
      </div>

      <GetInvolved />
      <ImpactPartners />
    </div>
  );
};
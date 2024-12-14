import React from 'react';
import { Layout, Search, Target, BarChart } from 'lucide-react';

export const AdvertiseOptions: React.FC = () => {
  const options = [
    {
      icon: Layout,
      title: 'Display Advertising',
      description: 'Premium banner placements across our platform with various size options',
      features: [
        'High-visibility locations',
        'Multiple banner sizes',
        'Responsive design',
        'Real-time performance tracking'
      ]
    },
    {
      icon: Search,
      title: 'Sponsored Listings',
      description: 'Boost your products\' visibility in search results and category pages',
      features: [
        'Priority placement',
        'Custom product badges',
        'Enhanced product cards',
        'Category targeting'
      ]
    },
    {
      icon: Target,
      title: 'Targeted Campaigns',
      description: 'Reach specific user segments based on behavior and preferences',
      features: [
        'Demographic targeting',
        'Interest-based targeting',
        'Geographic targeting',
        'Behavior-based targeting'
      ]
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive reporting and analytics for your campaigns',
      features: [
        'Real-time statistics',
        'Conversion tracking',
        'ROI analysis',
        'A/B testing tools'
      ]
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Advertising Options
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {options.map(({ icon: Icon, title, description, features }) => (
          <div key={title} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 rounded-lg p-3">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-4">{title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="space-y-2">
              {features.map((feature) => (
                <li key={feature} className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import { BarChart } from '../../charts/BarChart';

export const PerformanceMetrics: React.FC = () => {
  // Mock data - replace with real data from API
  const data = [
    { label: 'Mon', value: 120, color: '#818CF8' },
    { label: 'Tue', value: 150, color: '#818CF8' },
    { label: 'Wed', value: 180, color: '#818CF8' },
    { label: 'Thu', value: 140, color: '#818CF8' },
    { label: 'Fri', value: 200, color: '#818CF8' },
    { label: 'Sat', value: 170, color: '#818CF8' },
    { label: 'Sun', value: 160, color: '#818CF8' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Performance Metrics</h2>
      </div>
      <div className="h-80">
        <BarChart 
          data={data}
          title="Daily Performance"
        />
      </div>
    </div>
  );
};
import React from 'react';

interface ImpactStat {
  value: string;
  label: string;
}

interface ImpactStatsProps {
  stats: ImpactStat[];
}

export const ImpactStats: React.FC<ImpactStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {stats.map(({ value, label }) => (
        <div key={label} className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-3xl font-bold text-indigo-600 mb-2">{value}</p>
          <p className="text-gray-600">{label}</p>
        </div>
      ))}
    </div>
  );
};
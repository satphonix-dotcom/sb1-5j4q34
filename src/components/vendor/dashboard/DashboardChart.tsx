import React from 'react';
import { LineChart } from '../../charts/LineChart';

export const DashboardChart: React.FC = () => {
  const [timeframe, setTimeframe] = React.useState<'day' | 'week' | 'month'>('week');

  // Mock data - replace with real data from API
  const data = [
    { date: '2024-03-01', value: 1200 },
    { date: '2024-03-02', value: 1900 },
    { date: '2024-03-03', value: 1500 },
    { date: '2024-03-04', value: 2200 },
    { date: '2024-03-05', value: 1800 },
    { date: '2024-03-06', value: 2400 },
    { date: '2024-03-07', value: 2100 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Sales Overview</h2>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value as typeof timeframe)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="day">Last 24 Hours</option>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
        </select>
      </div>
      <div className="h-80">
        <LineChart data={data} />
      </div>
    </div>
  );
};
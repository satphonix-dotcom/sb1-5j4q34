import React from 'react';
import { LineChart } from '../charts/LineChart';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface SalesData {
  date: string;
  value: number;
}

interface SalesOverviewProps {
  data: SalesData[];
  timeframe: 'day' | 'week' | 'month' | 'year';
  onTimeframeChange: (timeframe: 'day' | 'week' | 'month' | 'year') => void;
}

export const SalesOverview: React.FC<SalesOverviewProps> = ({
  data,
  timeframe,
  onTimeframeChange
}) => {
  const totalSales = data.reduce((sum, item) => sum + item.value, 0);
  const previousPeriodSales = totalSales * 0.85; // Mock data
  const percentageChange = ((totalSales - previousPeriodSales) / previousPeriodSales) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Sales Overview</h2>
          <div className="flex items-center mt-1">
            <span className="text-2xl font-bold text-gray-900">
              {totalSales.toFixed(2)} ETH
            </span>
            <div className={`flex items-center ml-2 ${
              percentageChange >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {percentageChange >= 0 ? (
                <ArrowUp className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDown className="h-4 w-4 mr-1" />
              )}
              <span className="text-sm font-medium">
                {Math.abs(percentageChange).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>

        <select
          value={timeframe}
          onChange={(e) => onTimeframeChange(e.target.value as typeof timeframe)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="day">Last 24 Hours</option>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="year">Last Year</option>
        </select>
      </div>

      <div className="h-80">
        <LineChart data={data} />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Average Order Value</p>
          <p className="text-lg font-semibold text-gray-900">0.15 ETH</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Orders</p>
          <p className="text-lg font-semibold text-gray-900">45</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Conversion Rate</p>
          <p className="text-lg font-semibold text-gray-900">3.2%</p>
        </div>
      </div>
    </div>
  );
};
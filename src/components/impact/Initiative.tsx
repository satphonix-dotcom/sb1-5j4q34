import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InitiativeProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
}

export const Initiative: React.FC<InitiativeProps> = ({
  icon: Icon,
  title,
  description,
  stats
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="p-3 bg-indigo-100 rounded-lg">
            <Icon className="h-6 w-6 text-indigo-600" />
          </div>
        </div>
        <div className="ml-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-sm font-medium text-indigo-600">{stats}</p>
        </div>
      </div>
    </div>
  );
};
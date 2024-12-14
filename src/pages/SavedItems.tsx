import React from 'react';
import { SavedItems as SavedItemsComponent } from '../components/profile/SavedItems';

export const SavedItems: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SavedItemsComponent />
    </div>
  );
};
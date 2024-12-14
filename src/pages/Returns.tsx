import React from 'react';
import { ReturnsHero } from '../components/returns/ReturnsHero';
import { ReturnsProcess } from '../components/returns/ReturnsProcess';
import { ReturnsPolicy } from '../components/returns/ReturnsPolicy';
import { ReturnsForm } from '../components/returns/ReturnsForm';
import { ReturnsFAQ } from '../components/returns/ReturnsFAQ';
import { ReturnsContact } from '../components/returns/ReturnsContact';

export const Returns: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ReturnsHero />
      <ReturnsProcess />
      <ReturnsPolicy />
      <ReturnsForm />
      <ReturnsFAQ />
      <ReturnsContact />
    </div>
  );
};
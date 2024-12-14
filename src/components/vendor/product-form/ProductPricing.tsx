import React from 'react';

interface ProductPricingProps {
  price?: number;
  onChange: (price: number) => void;
}

export const ProductPricing: React.FC<ProductPricingProps> = ({
  price = 0,
  onChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Price (ETH)
        </label>
        <div className="mt-1">
          <input
            type="number"
            value={price}
            onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
            step="0.001"
            min="0"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>
    </div>
  );
};
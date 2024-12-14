import React from 'react';

interface ProductInventoryProps {
  stock?: number;
  onChange: (stock: number) => void;
}

export const ProductInventory: React.FC<ProductInventoryProps> = ({
  stock = 0,
  onChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Inventory</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Stock Quantity
        </label>
        <div className="mt-1">
          <input
            type="number"
            value={stock}
            onChange={(e) => onChange(parseInt(e.target.value) || 0)}
            min="0"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>
    </div>
  );
};
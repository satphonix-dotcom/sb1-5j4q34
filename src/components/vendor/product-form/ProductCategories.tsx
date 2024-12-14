import React from 'react';

interface ProductCategoriesProps {
  category?: string;
  onChange: (category: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({
  category = '',
  onChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Category</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Product Category
        </label>
        <select
          value={category}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          <option value="">Select a category</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          <option value="Books">Books</option>
          <option value="Sports">Sports</option>
          <option value="Art">Art</option>
        </select>
      </div>
    </div>
  );
};
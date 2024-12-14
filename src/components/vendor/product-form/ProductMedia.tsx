import React from 'react';
import { Upload } from 'lucide-react';

interface ProductMediaProps {
  image?: string;
  onImageChange: (image: string) => void;
}

export const ProductMedia: React.FC<ProductMediaProps> = ({
  image,
  onImageChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Media</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Product Image
        </label>
        <div className="mt-1 flex items-center space-x-4">
          {image ? (
            <img
              src={image}
              alt="Product preview"
              className="h-32 w-32 object-cover rounded-lg"
            />
          ) : (
            <div className="h-32 w-32 rounded-lg bg-gray-100 flex items-center justify-center">
              <Upload className="h-8 w-8 text-gray-400" />
            </div>
          )}
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              // Mock image upload - replace with actual implementation
              onImageChange('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500');
            }}
          >
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
};
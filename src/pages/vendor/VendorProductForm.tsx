import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { ProductBasicInfo } from '../../components/vendor/product-form/ProductBasicInfo';
import { ProductPricing } from '../../components/vendor/product-form/ProductPricing';
import { ProductMedia } from '../../components/vendor/product-form/ProductMedia';
import { ProductInventory } from '../../components/vendor/product-form/ProductInventory';
import { ProductCategories } from '../../components/vendor/product-form/ProductCategories';
import { Product } from '../../types';

// Mock product for editing - replace with API call
const MOCK_PRODUCT: Product = {
  id: '1',
  name: 'Premium Wireless Headphones',
  description: 'High-quality wireless headphones with noise cancellation',
  price: 0.15,
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
  category: 'Electronics',
  vendorId: '1',
  stock: 10,
  rating: 4.5,
  reviews: 128
};

export const VendorProductForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  const [error, setError] = React.useState('');
  const [product, setProduct] = React.useState<Partial<Product>>(
    isEditing ? MOCK_PRODUCT : {
      name: '',
      description: '',
      price: 0,
      image: '',
      category: '',
      stock: 0
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/vendor/products');
    } catch (err) {
      setError('Failed to save product. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        {isEditing ? 'Edit Product' : 'Add New Product'}
      </h1>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <ProductBasicInfo
          product={product}
          onChange={(updates) => setProduct(prev => ({ ...prev, ...updates }))}
        />

        <ProductMedia
          image={product.image}
          onImageChange={(image) => setProduct(prev => ({ ...prev, image }))}
        />

        <ProductPricing
          price={product.price}
          onChange={(price) => setProduct(prev => ({ ...prev, price }))}
        />

        <ProductInventory
          stock={product.stock}
          onChange={(stock) => setProduct(prev => ({ ...prev, stock }))}
        />

        <ProductCategories
          category={product.category}
          onChange={(category) => setProduct(prev => ({ ...prev, category }))}
        />

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/vendor/products')}
            className="btn-secondary"
          >
            Cancel
          </button>
          <button type="submit" className="btn">
            {isEditing ? 'Update Product' : 'Create Product'}
          </button>
        </div>
      </form>
    </div>
  );
};
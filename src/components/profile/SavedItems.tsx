import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { Product } from '../../types';

// Mock data - replace with actual saved items from API
const MOCK_SAVED_ITEMS: Product[] = [
  {
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
  }
];

export const SavedItems: React.FC = () => {
  const addItem = useCartStore(state => state.addItem);
  const [savedItems, setSavedItems] = React.useState(MOCK_SAVED_ITEMS);

  const removeFromSaved = (productId: string) => {
    setSavedItems(items => items.filter(item => item.id !== productId));
  };

  const moveToCart = (product: Product) => {
    addItem(product);
    removeFromSaved(product.id);
  };

  if (savedItems.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No saved items
        </h3>
        <p className="text-gray-500">
          Items you save will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Saved Items</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden border">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-indigo-600">
                  {item.price} ETH
                </span>
                <div className="space-x-2">
                  <button
                    onClick={() => moveToCart(item)}
                    className="btn-secondary"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromSaved(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
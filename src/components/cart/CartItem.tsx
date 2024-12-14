import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCartStore } from '../../store/cartStore';
import { PriceDisplay } from '../PriceDisplay';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > item.stock) return;
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b last:border-0">
      <div className="flex-shrink-0 w-24 h-24">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-medium text-gray-900 truncate">
          {item.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
        
        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center border rounded-md">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="p-2 hover:bg-gray-100"
              disabled={item.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 py-2 text-center min-w-[3rem]">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="p-2 hover:bg-gray-100"
              disabled={item.quantity >= item.stock}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="text-right">
        <PriceDisplay
          crypto={item.crypto}
          amount={item.price * item.quantity}
          className="text-lg font-bold text-gray-900"
        />
        <p className="text-sm text-gray-500">
          {item.price} {item.crypto.symbol} each
        </p>
      </div>
    </div>
  );
};
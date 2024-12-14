import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-velvet-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-heading font-heading1 text-2xl text-velvet-light">
            VELVET COIN
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/new" className="nav-link">NEW</Link>
            <Link to="/stores" className="nav-link">Stores</Link>
            <Link to="/designer" className="nav-link">Designer</Link>
            <Link to="/clothing" className="nav-link">Clothing</Link>
            <Link to="/shoes" className="nav-link">Shoes</Link>
            <Link to="/bags" className="nav-link">Bags</Link>
            <Link to="/jewelry" className="nav-link">Jewelry</Link>
            <Link to="/accessories" className="nav-link">Accessories</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <button className="nav-link">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/account" className="nav-link">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="nav-link">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
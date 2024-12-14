import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-velvet-dark border-t border-velvet-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-heading font-heading1 text-2xl text-velvet-light">
              VELVET COIN
            </Link>
            <p className="mt-2 text-velvet-muted">
              Exclusivity and luxury with cryptocurrency
            </p>
          </div>

          <div>
            <h3 className="font-heading font-heading2 text-velvet-light mb-4">
              SUPPORT
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping-policy" className="text-velvet-muted hover:text-velvet-accent">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-velvet-muted hover:text-velvet-accent">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-velvet-muted hover:text-velvet-accent">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-heading2 text-velvet-light mb-4">
              LEGAL
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-velvet-muted hover:text-velvet-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-velvet-muted hover:text-velvet-accent">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-heading2 text-velvet-light mb-4">
              CONNECT
            </h3>
            <div className="flex space-x-4">
              {/* Add social media icons */}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-velvet-accent/10 text-center text-velvet-muted">
          <p>&copy; {new Date().getFullYear()} VelvetCoin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
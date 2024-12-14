import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2400"
          alt="Luxury fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velvet-dark/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-heading font-heading1 text-velvet-light mb-6">
            UNLOCK DESIGNER WITH CRYPTO
          </h1>
          <p className="text-xl text-velvet-light mb-8">
            BTC, USDT, LTC, ETH, XRP
          </p>
          <Link to="/learn-more" className="btn">
            LEARN MORE
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[1, 2, 3, 4].map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === 0 ? 'bg-velvet-accent' : 'bg-velvet-light/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
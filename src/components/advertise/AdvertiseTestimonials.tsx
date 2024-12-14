import React from 'react';
import { Star } from 'lucide-react';

export const AdvertiseTestimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The targeting capabilities helped us reach the perfect audience for our crypto products. ROI exceeded our expectations.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "CryptoTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
      quote: "The analytics dashboard provides invaluable insights that helped us optimize our campaigns effectively.",
      author: "Michael Rodriguez",
      role: "Growth Manager",
      company: "BlockFin",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    },
    {
      quote: "Excellent support team and platform features. We've seen a 300% increase in conversions since starting.",
      author: "Lisa Thompson",
      role: "CEO",
      company: "DeFi Ventures",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        What Our Advertisers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.author} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  title: string;
  image: string;
  link: string;
  buttonText: string;
}

export const CategoryGrid: React.FC = () => {
  const categories: Category[] = [
    {
      title: 'LUXURY WATCHES',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800',
      link: '/watches',
      buttonText: 'VIEW'
    },
    {
      title: 'RARE BAGS',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
      link: '/bags',
      buttonText: 'VIEW'
    },
    {
      title: 'EXCLUSIVE SHOES',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800',
      link: '/shoes',
      buttonText: 'VIEW'
    },
    {
      title: 'DISTINCT CLOTHING',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800',
      link: '/clothing',
      buttonText: 'VIEW'
    },
    {
      title: 'TIMELESS JEWELRY',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
      link: '/jewelry',
      buttonText: 'VIEW'
    },
    {
      title: 'ACCESSORIES',
      image: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=800',
      link: '/accessories',
      buttonText: 'VIEW'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {categories.map((category) => (
        <Link 
          key={category.title}
          to={category.link}
          className="relative group overflow-hidden"
        >
          <div className="aspect-w-4 aspect-h-3">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velvet-dark/80 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h3 className="font-heading font-heading1 text-2xl text-velvet-light mb-4">
                {category.title}
              </h3>
              <button className="btn">
                {category.buttonText}
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
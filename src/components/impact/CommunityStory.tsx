import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CommunityStoryProps {
  id: number;
  imageUrl: string;
}

export const CommunityStory: React.FC<CommunityStoryProps> = ({ id, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt={`Community story ${id}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-semibold text-gray-900 mb-2">
          Success Story #{id}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          How our platform helped transform a local business into a global player
        </p>
        <Link
          to={`/stories/${id}`}
          className="text-indigo-600 hover:text-indigo-500 text-sm font-medium flex items-center"
        >
          Read More
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};
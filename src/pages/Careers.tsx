import React from 'react';
import { Briefcase, Users, Globe, Rocket, DollarSign, Book } from 'lucide-react';

export const Careers: React.FC = () => {
  // Mock job listings - replace with API call
  const jobs = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our team to build the future of crypto e-commerce...',
      requirements: [
        'Experience with React and TypeScript',
        'Understanding of blockchain technology',
        'Strong problem-solving skills'
      ]
    },
    {
      id: '2',
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Lead product strategy and development...',
      requirements: [
        'Experience in e-commerce platforms',
        'Strong analytical skills',
        'Excellent communication'
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation with cryptocurrency options'
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Work from anywhere in the world'
    },
    {
      icon: Book,
      title: 'Learning Budget',
      description: 'Annual budget for courses and conferences'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Join the Future of E-commerce
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Help us build the world's leading cryptocurrency-powered marketplace
        </p>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Users className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Customer First
            </h3>
            <p className="text-gray-600">
              We put our users at the heart of everything we do
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Rocket className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              We're not afraid to challenge the status quo
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Globe className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Global Impact
            </h3>
            <p className="text-gray-600">
              We're building for a worldwide community
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Benefits & Perks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white rounded-lg shadow-md p-6">
              <Icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Open Positions
        </h2>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="btn-secondary">
                  Apply Now
                </button>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-indigo-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Don't see the right position?
        </h2>
        <p className="text-gray-600 mb-6">
          We're always looking for talented people to join our team.
          Send us your resume and we'll keep you in mind for future opportunities.
        </p>
        <button className="btn">
          Send Resume
        </button>
      </div>
    </div>
  );
};
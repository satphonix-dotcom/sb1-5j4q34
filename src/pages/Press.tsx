import React from 'react';
import { Newspaper, Download, ExternalLink, TrendingUp, Award, Users } from 'lucide-react';

export const Press: React.FC = () => {
  // Mock press releases and news - replace with API call
  const pressReleases = [
    {
      id: '1',
      title: 'VelvetCoin Launches Revolutionary Crypto E-commerce Platform',
      date: '2024-03-15',
      summary: 'VelvetCoin introduces a new era of online shopping with cryptocurrency payments...',
      pdfUrl: '#'
    },
    {
      id: '2',
      title: 'VelvetCoin Reaches 100,000 Active Users Milestone',
      date: '2024-02-28',
      summary: 'Leading crypto e-commerce platform celebrates rapid growth...',
      pdfUrl: '#'
    }
  ];

  const newsArticles = [
    {
      id: '1',
      title: 'How VelvetCoin is Transforming E-commerce',
      publication: 'CryptoNews',
      date: '2024-03-10',
      url: '#'
    },
    {
      id: '2',
      title: 'The Future of Online Shopping is Here',
      publication: 'Tech Weekly',
      date: '2024-03-05',
      url: '#'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '100K+',
      label: 'Active Users'
    },
    {
      icon: TrendingUp,
      value: '$10M+',
      label: 'Monthly Volume'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Countries'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Press & Media</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Latest news, press releases, and media resources from VelvetCoin
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="bg-white rounded-lg shadow-md p-6 text-center">
            <Icon className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
            <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
            <p className="text-gray-600">{label}</p>
          </div>
        ))}
      </div>

      {/* Press Releases */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Press Releases</h2>
        <div className="space-y-6">
          {pressReleases.map((release) => (
            <div key={release.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {release.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(release.date).toLocaleDateString()}
                  </p>
                </div>
                <a
                  href={release.pdfUrl}
                  className="btn-secondary flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </a>
              </div>
              <p className="mt-4 text-gray-600">{release.summary}</p>
            </div>
          ))}
        </div>
      </div>

      {/* News Coverage */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">In the News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsArticles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {article.publication} • {new Date(article.date).toLocaleDateString()}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Media Resources */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Brand Assets</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Logo Package</p>
                  <p className="text-sm text-gray-500">PNG, SVG, AI formats</p>
                </div>
                <button className="btn-secondary">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Brand Guidelines</p>
                  <p className="text-sm text-gray-500">PDF format</p>
                </div>
                <button className="btn-secondary">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Media Contact</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-medium text-gray-900">Press Inquiries</p>
              <p className="text-gray-600 mt-2">
                For press inquiries, please contact our media relations team:
              </p>
              <p className="text-gray-600 mt-4">
                Email: press@velvetcoin.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
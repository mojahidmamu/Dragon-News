import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const NewsDetials = () => {

    const { id } = useParams();  
    const navigate = useNavigate();
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
    const fetchNewsDetails = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const response = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
        const data = await response.json();
        
        if (data.status && data.data && data.data.length > 0) {
          setNews(data.data[0]); // API returns array with single news item
        } else {
          setError('News not found');
        }
      } catch (error) {
        console.error('Error fetching news details:', error);
        setError('Failed to load news details');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetails();
  }, [id]);


    if (loading) {
    return (
        <div className="min-h-screen bg-gray-900 flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
        );
    }

        if (error || !news) {
        return (
        <div className="min-h-screen bg-gray-900 flex justify-center items-center">
            <div className="text-center">
            <p className="text-red-500 text-xl mb-4">{error || 'News not found'}</p>
            <button
                onClick={() => navigate('/')}
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-6 py-2 rounded-full font-semibold"
            >
                Go Back Home
            </button>
            </div>
        </div>
        );
    }
    return (
        <div className="min-h-screen bg-gray-900 text-white">
             {/* News Details Content */}
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={news.image_url || news.thumbnail_url}
              alt={news.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Title and Meta Info */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {news.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-400 border-b border-gray-800 pb-4">
              <div className="flex items-center gap-2">
                <img
                  src={news.author?.img || 'https://via.placeholder.com/40'}
                  alt={news.author?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{news.author?.name || 'Unknown Author'}</p>
                  <p className="text-xs">
                    {news.author?.published_date 
                      ? new Date(news.author.published_date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })
                      : 'Date not available'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="text-amber-400">⭐</span>
                  <span>{news.rating?.number || 'N/A'}</span>
                  <span className="text-sm">({news.rating?.badge || 'No Rating'})</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>👁️</span>
                  <span>{news.total_view || 0} views</span>
                </div>
                {news.others_info?.is_trending && (
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    Trending
                  </span>
                )}
                {news.others_info?.is_todays_pick && (
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    Today's Pick
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Full Details */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {news.details?.replace(/<[^>]*>/g, '') || 'No details available for this news article.'}
            </p>
          </div>

          {/* Tags/Cloud if available */}
          {news.details?.includes('Tag Cloud') && (
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h3 className="text-lg font-semibold mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {news.details
                  .match(/Tags:(.*?)(?:\n|$)/)?.[1]
                  ?.split(',')
                  .map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag.trim()}
                    </span>
                  ))}
              </div>
            </div>
          )}

          {/* Share Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-3">Share this article:</h3>
           <div className="flex gap-3">
                {/* GitHub */}
                <a
                href="https://github.com/mojahidmamu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg transition-colors"
                >
                GitHub
                </a>

                {/* Facebook */}
                <a
                href="https://www.facebook.com/abdullah.all.mojahid.2024"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                Facebook
                </a>

                {/* LinkedIn */}
                <a
                href="https://www.linkedin.com/in/abdullah-all-mojahid-a8a57b329/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
                >
                LinkedIn
                </a>
            </div>
          </div>
        </article>
      </main>
        </div>
    );
};

export default NewsDetials;
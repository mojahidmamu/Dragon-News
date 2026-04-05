import React from 'react';

const NewsSection = ({news, loading}) => {

     if (loading) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

   if (!news || news.length === 0) {
    return (
      <div className="flex-1 text-center py-10">
        <p className="text-gray-400">No news available in this category.</p>
      </div>
    );
  }
    return (
        <div className="flex-1 space-y-6">
             {news.map( (item) => {
                 <article key={item._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={item.thumbnail_url || item.image_url}
                alt={item.title}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={item.author?.img || 'https://via.placeholder.com/40'}
                  alt={item.author?.name || 'Author'}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm text-gray-400">
                  {item.author?.name || 'Unknown Author'} |{' '}
                  {new Date(item.author?.published_date).toLocaleDateString()}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {item.details?.replace(/<[^>]*>/g, '').substring(0, 200)}...
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">⭐ {item.rating?.number || 'N/A'}</span>
                  <span className="text-gray-400">({item.rating?.badge || 'No Rating'})</span>
                  <span className="text-gray-400">👁️ {item.total_view || 0} views</span>
                </div>
                <button className="text-amber-500 hover:text-amber-400 font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </article>
             })}
            
        </div>
    );
};

export default NewsSection;
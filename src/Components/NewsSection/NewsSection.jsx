import { useNavigate } from "react-router";

const NewsSection = ({ news, loading }) => {

    const navigate = useNavigate();

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

  const handleReadMore = (newsId) => {
    navigate(`news/${newsId}`)
  }

  return (
    <div className="flex-1 space-y-6">
      {news.map((article) => (
        <article key={article._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={article.thumbnail_url || article.image_url}
                alt={article.title}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={article.author?.img || 'https://via.placeholder.com/40'}
                  alt={article.author?.name || 'Author'}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm text-gray-400">
                  {article.author?.name || 'Unknown Author'} |{' '}
                  {new Date(article.author?.published_date).toLocaleDateString()}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2 text-white">{article.title}</h2>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {article.details?.replace(/<[^>]*>/g, '').substring(0, 200)}...
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">⭐ {article.rating?.number || 'N/A'}</span>
                  <span className="text-gray-400">({article.rating?.badge || 'No Rating'})</span>
                  <span className="text-gray-400">👁️ {article.total_view || 0} views</span>
                </div>
                <button onClick={() => handleReadMore(article._id)} className="text-amber-500 hover:text-amber-400 font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsSection;
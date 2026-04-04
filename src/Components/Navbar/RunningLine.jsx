// components/RunningLine.jsx
import React, { useState, useEffect, useRef } from 'react';

const RunningLine = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const containerRef = useRef(null);

  const newsItems = [
    { id: 1, text: "⚽ Match Highlights: Germany vs Spain - Spain wins 2-1 in dramatic finish!", link: "/match/germany-spain", category: "sports" },
    { id: 2, text: "🔥 BREAKING: Global climate summit reaches historic agreement", link: "/news/climate-summit", category: "news" },
    { id: 3, text: "📈 Stock markets rally as tech sector shows strong growth", link: "/finance/markets", category: "finance" },
    { id: 4, text: "🎬 New blockbuster breaks box office records worldwide", link: "/entertainment/box-office", category: "entertainment" },
    { id: 5, text: "🏆 Champions League: Quarter-final draws announced - exciting matchups ahead!", link: "/sports/champions-league", category: "sports" },
    { id: 6, text: "💡 Tech breakthrough: Scientists achieve quantum computing milestone", link: "/tech/quantum", category: "technology" },
    { id: 7, text: "🌍 World Cup 2026: Host cities announced!", link: "/sports/world-cup", category: "sports" },
    { id: 8, text: "💰 Bitcoin surges past $100,000 milestone", link: "/finance/crypto", category: "finance" },
  ];

  // Duplicate items for seamless loop
  const duplicatedItems = [...newsItems, ...newsItems];

  const handleItemClick = (e, item) => {
    e.preventDefault();
    console.log(`Clicked on: ${item.text}`);
    alert(`Opening: ${item.text}\nLink: ${item.link}`);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Reset animation when pause state changes
  useEffect(() => {
    if (!isPaused) {
      setAnimationKey(prev => prev + 1);
    }
  }, [isPaused]);

  const getCategoryColor = (category) => {
    const colors = {
      sports: 'hover:bg-green-500/20',
      news: 'hover:bg-blue-500/20',
      finance: 'hover:bg-yellow-500/20',
      entertainment: 'hover:bg-purple-500/20',
      technology: 'hover:bg-cyan-500/20'
    };
    return colors[category] || 'hover:bg-gray-500/20';
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-y border-amber-500/30 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center">
          {/* LATEST Label */}
          <div className="bg-amber-500 px-4 md:px-6 py-2.5 flex items-center gap-2 flex-shrink-0">
            <span className="font-black text-xs md:text-sm tracking-wider text-gray-900">
              LATEST
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
          </div>

          {/* Scrolling Ticker */}
          <div 
            className="flex-1 overflow-hidden relative h-12"
            ref={containerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={`inline-flex items-center whitespace-nowrap ${
                isPaused ? 'animation-paused' : ''
              }`}
              style={{
                animation: `scrollTicker 35s linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
              key={animationKey}
            >
              {duplicatedItems.map((item, index) => (
                <a
                  key={`${item.id}-${index}`}
                  href={item.link}
                  onClick={(e) => handleItemClick(e, item)}
                  className={`inline-flex items-center px-3 py-2 mx-1 rounded-lg transition-all duration-300 ${getCategoryColor(item.category)} hover:scale-105 cursor-pointer`}
                >
                  <span className="text-gray-200 hover:text-amber-400 text-sm md:text-base transition-colors duration-200">
                    {item.text}
                  </span>
                  <span className="mx-3 text-amber-500/50 text-xs">✦</span>
                </a>
              ))}
            </div>
          </div>

          {/* Pause/Play Button */}
          <button
            onClick={togglePause}
            className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 mx-2 md:mx-3 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-gray-900 border border-amber-500/30 hover:border-amber-500 transition-all duration-300 flex items-center justify-center"
            aria-label={isPaused ? 'Resume ticker' : 'Pause ticker'}
          >
            {isPaused ? (
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            ) : (
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Add keyframe animation via style tag */}
      <style jsx>{`
        @keyframes scrollTicker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animation-paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export default RunningLine;
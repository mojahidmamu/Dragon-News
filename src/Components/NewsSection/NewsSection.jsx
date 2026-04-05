import React from 'react';

const NewsSection = ({news, loading}) => {
    return (
        <div>
            <h1>News Section</h1>
            {/* {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {news.map((article) => (
                        <li key={article._id}>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    );
};

export default NewsSection;
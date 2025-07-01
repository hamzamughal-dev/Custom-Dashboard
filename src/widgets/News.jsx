import React, { useEffect, useState } from 'react';

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;

        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        const data = await res.json();

        if (!res.ok || !data.articles) {
          throw new Error(data.message || 'Failed to fetch news.');
        }

        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-[60vh] rounded-xl shadow-inner">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">📰 Latest Headlines</h2>

      {loading ? (
        <p className="text-gray-500 text-center">Loading news...</p>
      ) : error ? (
        <p className="text-red-500 text-center font-medium">⚠️ {error}</p>
      ) : articles.length === 0 ? (
        <p className="text-center text-gray-600 italic">No news articles available.</p>
      ) : (
        <ul className="space-y-6 max-w-3xl mx-auto">
          {articles.map((article, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-700 hover:underline"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-600 mt-2">
                {article.description || 'No description available.'}
              </p>
              <div className="text-xs text-gray-400 mt-2">
                {article.source?.name} • {new Date(article.publishedAt).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default News;

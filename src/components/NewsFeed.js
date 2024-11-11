import React from 'react';

function NewsFeed() {
  const articles = [
    { title: 'Market hits all-time high', summary: 'The stock market reached an all-time high today...' },
    { title: 'Tech stocks rally', summary: 'Technology stocks are seeing a big increase in value...' },
  ];

  return (
    <div className="p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">News Feed</h2>
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={index}>
            <h3 className="font-semibold">{article.title}</h3>
            <p className="text-gray-600">{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsFeed;


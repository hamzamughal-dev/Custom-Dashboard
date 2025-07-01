import React, { useState } from 'react';
import { askAI } from '../utils/aiUtils';

function AIHelp() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const key = import.meta.env.VITE_OPENAI_API_KEY;
    const answer = await askAI(query, key);
    setResponse(answer);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded shadow w-80 z-50">
      <h2 className="font-bold text-xl mb-2">AI Assistant</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask something..."
        className="w-full p-2 border rounded mb-2"
      />
      <button onClick={handleAsk} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        {loading ? "Thinking..." : "Ask"}
      </button>
      {response && <div className="mt-2 bg-gray-100 p-2 rounded">{response}</div>}
    </div>
  );
}

export default AIHelp;

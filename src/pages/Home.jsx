// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 text-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Smart Productivity Hub</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Your all-in-one dashboard for weather, notes, to-dos, news, and AI assistance. Designed to keep you organized and informed.
      </p>
      <Link
        to="/dashboard"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Home;

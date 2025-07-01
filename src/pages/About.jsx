// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="max-w-3xl bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">About Smart Productivity Hub</h1>
        <p className="text-gray-700 text-lg mb-4">
          Smart Productivity Hub is a unified, modern dashboard designed to boost your daily efficiency. Whether you're planning your tasks, checking the latest weather, tracking news, or seeking help from an AI assistant — it's all in one place.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Weather:</strong> Real-time updates for any city worldwide</li>
          <li><strong>Notes:</strong> Quick note-taking with persistence</li>
          <li><strong>To-dos:</strong> Task management with a clear interface</li>
          <li><strong>News:</strong> Latest headlines from top sources</li>
          <li><strong>AI Assistant:</strong> Powered by GPT, ask anything</li>
        </ul>
        <p className="text-gray-600">
          This app was built using <strong>ReactJS</strong>, <strong>Tailwind CSS</strong>, and APIs like OpenWeather, NewsAPI, and OpenAI. It's designed to be simple, responsive, and powerful — whether you're a student, professional, or just someone who wants everything in one place.
        </p>
      </div>
    </div>
  );
}

export default About;

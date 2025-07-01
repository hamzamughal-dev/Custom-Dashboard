// src/components/Dashboard.jsx
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import AIHelp from './../utils/apiHelp';

function Dashboard() {
  const tabs = [
    { name: 'Weather', path: 'weather' },
    { name: 'Notes', path: 'notes' },
    { name: 'Todos', path: 'todos' },
    { name: 'News', path: 'news' },
    { name: 'Clock', path: 'clock' },
  ];

  // Shared states (lifted up)
  const [notes, setNotes] = useState([]);
  const [todos, setTodos] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-100 p-6">
      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className="px-4 py-2 bg-gray-300 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            {tab.name}
          </Link>
        ))}
      </div>

      {/* Nested Routes */}
      <div className="bg-white p-4 rounded shadow">
        <Outlet context={{ notes, setNotes, todos, setTodos }} />
      </div>

      {/* AI Assistant */}
      <AIHelp />
    </div>
  );
}

export default Dashboard;

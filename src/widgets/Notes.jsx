// src/components/dashboard/Notes.jsx
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Notes() {
  const { notes, setNotes } = useOutletContext();
  const [note, setNote] = useState('');

  const addNote = () => {
    const trimmed = note.trim();
    if (trimmed !== '') {
      setNotes([trimmed, ...notes]);
      setNote('');
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 min-h-[60vh] rounded-xl shadow-inner">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">📝 Notes</h2>
      <div className="max-w-xl mx-auto">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full h-28 p-3 border border-purple-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Write something here..."
        />
        <button
          onClick={addNote}
          className="mt-3 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full shadow"
        >
          ➕ Save Note
        </button>

        <div className="mt-6">
          {notes.length === 0 ? (
            <p className="text-gray-500 italic text-center">No notes yet.</p>
          ) : (
            <ul className="space-y-3">
              {notes.map((n, i) => (
                <li
                  key={i}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-200 border border-gray-200"
                >
                  {n}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notes;

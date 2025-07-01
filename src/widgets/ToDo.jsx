// src/components/dashboard/Todo.jsx
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Todo() {
  const { todos, setTodos } = useOutletContext();
  const [todo, setTodo] = useState('');
  const [error, setError] = useState('');

  const addTask = () => {
    const trimmed = todo.trim();
    if (trimmed === '') {
      setError('⚠️ Task cannot be empty');
      return;
    }

    setTodos([{ text: trimmed, done: false }, ...todos]);
    setTodo('');
    setError('');
  };

  const toggleDone = (index) => {
    setTodos(
      todos.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 min-h-[60vh] rounded-xl shadow-inner">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">📝 To-Do List</h2>

      <div className="max-w-xl mx-auto">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full p-3 border border-purple-300 rounded-xl text-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Add a new task..."
        />

        {error && (
          <div className="text-red-600 mt-2 text-sm font-medium">{error}</div>
        )}

        <button
          onClick={addTask}
          className="mt-3 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition duration-200 shadow"
        >
          ➕ Add Task
        </button>

        <div className="mt-6">
          {todos.length === 0 ? (
            <p className="text-gray-500 italic text-center">No tasks yet.</p>
          ) : (
            <ul className="space-y-4">
              {todos.map((t, i) => (
                <li
                  key={i}
                  className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 shadow-md border ${
                    t.done
                      ? 'bg-gray-100 text-gray-400 line-through'
                      : 'bg-white text-gray-800'
                  } hover:shadow-lg`}
                >
                  <div className="flex items-center gap-2 text-lg">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 group-hover:scale-110 transition" />
                    {t.text}
                  </div>

                  <button
                    onClick={() => toggleDone(i)}
                    className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                      t.done
                        ? 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    {t.done ? 'Undo' : 'Done'}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;

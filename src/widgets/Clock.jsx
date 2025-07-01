import React, { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[400px] flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center w-full max-w-md transition duration-300 ease-in-out hover:scale-105">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-4 drop-shadow">🕒 Current Time</h2>
        
        <p className="text-4xl font-mono text-gray-800 mb-2 animate-pulse">
          {time.toLocaleTimeString()}
        </p>
        
        <p className="text-lg text-gray-600">{time.toDateString()}</p>

        <div className="mt-6 text-sm text-gray-500 italic">
          This clock updates every second ⏱️
        </div>
      </div>
    </div>
  );
}

export default Clock;

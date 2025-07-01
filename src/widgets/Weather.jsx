import React, { useState, useEffect } from 'react';
import { fetchWeather } from './../utils/aiUtils';

function Weather() {
  const [city, setCity] = useState('Lahore');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather(city, import.meta.env.VITE_WEATHER_API_KEY);
      if (data) {
        setWeatherData(data);
        setError('');
      } else {
        setWeatherData(null);
        setError('City not found or API error.');
      }
    };

    getWeather();
  }, [city]);

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-[60vh] bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-inner">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">🌤️ Weather Checker</h2>

      <div className="w-full max-w-md">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg shadow"
          placeholder="Enter city name..."
        />

        {error && <p className="text-red-500 mt-3 text-center">{error}</p>}

        {weatherData && (
          <div className="mt-6 bg-white p-6 rounded-xl shadow-md text-center space-y-2">
            <h3 className="text-2xl font-semibold text-blue-600">{weatherData.name}</h3>
            <p className="text-gray-700 capitalize text-lg">
              {weatherData.weather[0].description}
            </p>
            <p className="text-xl text-gray-800 font-bold">
              🌡️ {weatherData.main.temp} °C
            </p>
            <p className="text-sm text-gray-500">
              Humidity: {weatherData.main.humidity}% | Wind: {weatherData.wind.speed} m/s
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;

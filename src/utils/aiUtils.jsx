// src/components/aiUtils.jsx
export async function fetchWeather(city, apiKey) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to fetch weather');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Weather API error:", error.message);
    return null; // return null so you can check it in Weather.jsx
  }
}

export async function askAI(prompt, apiKey) {
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 100,
      }),
    });

    if (res.status === 429) {
      return '⚠️ Too many requests. Please wait a moment before trying again.';
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content || 'No response from AI';
  } catch (error) {
    console.error('AI error:', error);
    return '❌ Error reaching AI service.';
  }
}
async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = 'OpenWeather_API_Key';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    showWeather(data);
  } catch (error) {
    document.getElementById('weatherData').innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

function showWeather(data) {
  const weatherBox = document.getElementById('weatherData');
  weatherBox.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
    <p><strong>Condition:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
  `;
}

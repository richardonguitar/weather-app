function getWeather() {
  const apiKey = '2c4de8801fc1f14ab7a4941a0be3b03b';
  const city = document.getElementById('city').value;

  if (!city) {
    alert ('Please enter a city');
    return;
  }

  const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';
  const forecastUrl = `'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
}

function getWeather() {

  fetch(currentWeatherUrl)
  .then(response => response.json())
  .then(data => {
    displayWeather(data);
  })
  .catch(error => {
    console.error('Error fetching current weather data:', error);
    alert('Error fetching current weather data. Please try again.');

  })
}

function getWeather() {
  fetch (forecastUrl)
  .then (response = response.json ())
  .then (data => {
  displayHourlyForecast(data.list);
  })
  .catch(error => {
  console.error('Error fetching hourly forecast data:', error);
  alert('Error fetching hourly forecast data. Please try again.');
  })
}

function displayWeather(data) {

  const tempDivInfo = document.getElementById('temp-div');
  const weatherInfoDiv = document.getElementById('weather-info');
  const weatherIcon = document.getElementById('weather-icon');
  const hourlyForecastDiv = document.getElementById('hourly-forecast');

  weatherInfoDiv.innerHTML = '';
  hourlyForecastDiv.innerHTML = '';
  tempDivInfo.innerHTML = '';
}

function displayWeather(data) {
  if (data.cod === '404') {
    weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
  } else{

    const cityName = data.name;
    const tempreture = Math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    const temperatureHTML = `
      <p>${tempreture}°C</p>
      `;

    const weatherHtml = `
    <p>${cityName}</p>
    <p>${description}</p>
    `;

    tempDivInfo. innerHTML = temperatureHTML;
    weatherInfoDiv. innerHTML = weatherHtml;
    weatherIcon.sc = iconUrl;
    weatherIcon.alt = description;

    showImage();
  }
}
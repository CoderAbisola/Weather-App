window.onload = function () {
  const lat = localStorage.getItem("latitude");
  const lon = localStorage.getItem("longitude");
  const apiKey = "5092e182d0fe2dd681cb44f05c1a9aab"; 

  if (!lat || !lon) {
    alert("Location not found. Please go back and search again.");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById("temperature").innerText = `${data.main.temp}°C`;
      document.getElementById("weather-condition").innerText = data.weather[0].description;
      document.getElementById("city-name").innerText = `${data.name}, ${data.sys.country}`;
      document.getElementById("sunset").innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
      document.getElementById("humidity").innerText = `${data.main.humidity}%`;
      document.getElementById("wind").innerText = `${data.wind.speed} m/s`;
      document.getElementById("pressure").innerText = `${data.main.pressure} hPa`;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      alert("Something went wrong. Please try again.");
    });
};

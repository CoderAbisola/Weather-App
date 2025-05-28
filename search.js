const openCageApiKey = "f23bde3a82fd403ab7c27b50d7048959";

function getLocation() {
  const cityName = document.getElementById("cityInput").value.trim();
  if (!cityName) {
    alert("Please enter a city name.");
    return;
  }
  fetchCoordinatesForCity(cityName);
}

function fetchCoordinatesForCity(city) {
  const geocodeUrl = `https://api.opencagedata.com/geocode/v1/geojson?q=${encodeURIComponent(city)}&key=${openCageApiKey}&limit=1`;
  fetch(geocodeUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch coordinates for city");
      }
      return response.json();
    })
    .then(data => {
      if (data.features.length > 0) {
        const [lon, lat] = data.features[0].geometry.coordinates;
        localStorage.setItem("latitude", lat);
        localStorage.setItem("longitude", lon);
        window.location.href = "result.html";
      } else {
        alert("No results found for that city. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error during geocoding:", error);
      alert("Unable to get coordinates for that city. Please try again.");
    });
}





// const openCageApiKey = "f23bde3a82fd403ab7c27b50d7048959";

// function handleSearch() {
//   const cityName = document.getElementById("cityInput").value.trim();
//   if (cityName) {
//     fetchCoordinatesForCity(cityName);
//   } else {
//     getLocation();
//   }
// }

// function fetchCoordinatesForCity(city) {
//   const geocodeUrl = `https://api.opencagedata.com/geocode/v1/geojson?q=${encodeURIComponent(city)}&key=${openCageApiKey}&limit=1`;
//   fetch(geocodeUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Failed to fetch coordinates for city");
//       }
//       return response.json();
//     })
//     .then(data => {
//       if (data.features.length > 0) {
//         const [lon, lat] = data.features[0].geometry.coordinates;
//         localStorage.setItem("latitude", lat);
//         localStorage.setItem("longitude", lon);
//         window.location.href = "result.html";
//       } else {
//         alert("No results found for that city. Please try again.");
//       }
//     })
//     .catch(error => {
//       console.error("Error during geocoding:", error);
//       alert("Unable to get coordinates for that city. Please try again.");
//     });
// }

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success, error);
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }

// function success(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   localStorage.setItem("latitude", lat);
//   localStorage.setItem("longitude", lon);
//   window.location.href = "result.html";
// }

// function error() {
//   alert("Sorry, no position available.");
// }



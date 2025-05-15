function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  localStorage.setItem("latitude", lat);
  localStorage.setItem("longitude", lon);

  window.location.href = "result.html";
}

function error() {
  alert("Sorry, no position available.");
}

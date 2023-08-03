// Check if the browser supports geolocation
if (navigator.geolocation) {
  // Get the user's current position
  navigator.geolocation.getCurrentPosition(function (position) {
    // Extract the latitude and longitude from the position object
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    // Do something with the latitude and longitude values
    console.log("Latitude: " + latitude + ", Longitude: " + longitude);
  });
} else {
  // Geolocation is not supported by the browser
  console.log("Geolocation is not supported by this browser.");
}

// Get the user's current location
navigator.geolocation.getCurrentPosition(function (position) {
  // Create a new map centered on the user's location
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: position.coords.latitude, lng: position.coords.longitude },
    zoom: 15,
  });

  // Create a marker at the user's location
  var marker = new google.maps.Marker({
    position: { lat: position.coords.latitude, lng: position.coords.longitude },
    map: map,
    title: "Your Location",
  });
});

var address = "1600 Amphitheatre Parkway, Mountain View, CA";

var url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=" +
  encodeURIComponent(address) +
  "&key=YOUR_API_KEY";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    var latitude = data.results[0].geometry.location.lat;
    var longitude = data.results[0].geometry.location.lng;
    console.log("Latitude: " + latitude + ", Longitude: " + longitude);
  })
  .catch((error) => {
    console.error("Error fetching location data:", error);
  });

navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then(function (stream) {
    var videoElement = document.getElementById("videoElement");
    videoElement.srcObject = stream;
  })
  .catch(function (err) {
    console.log("Error: " + err.message);
  });


// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
// var myMap = L.map("map", {
//   center: [45.52, -122.67],
//   zoom: 13
// });

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(myMap);

var map = L.map('map').setView([45.52, -122.67], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([45.52, -122.67]).addTo(map)
    .bindPopup('Nice work Jorge <br> this work')
    .openPopup();

// original link
// https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}


// Anothet link

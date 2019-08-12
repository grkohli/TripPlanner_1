const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');
//create api token and access it here
mapboxgl.accessToken =
  'pk.eyJ1IjoianpoZW5nMzE4IiwiYSI6ImNqejhrZmczcjAzajYzbG1wMzl5bGQwOTcifQ.Rl_T2JL3dFN1OA0gp7H82w';

//create a map instance
const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const marker = buildMarker('hotel', [-74.009, 40.705]);
marker.addTo(map);

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

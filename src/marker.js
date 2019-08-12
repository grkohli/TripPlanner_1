const mapboxgl = require('mapbox-gl');

function buildMarker(type, coords) {
  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';

  if (type.toLowerCase() === 'activity') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  } else if (type.toLowerCase() === 'hotel') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
  } else if (type.toLowerCase() === 'restaurant') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
  }
  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}

module.exports = buildMarker;
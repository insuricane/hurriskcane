var map = L.map('map', {
  center: [24.80, -81.2],
  zoom: 5
});

function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  }
}

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYW5kcmV3Y3VpIiwiYSI6ImNqazNkZWY0bjBodXQzbHRoN3QzdjQ2bGQifQ.B_6mN1CgDJrz2_mSjGGaOQ'
}).addTo(map);
L.tileLayer.provider('CartoDB.Positron').addTo(map);
L.tileLayer.provider('CartoDB.Voyager').addTo(map);

var geojsonMarkerOptions = {
  radius: 2.5,
  fillColor: "#FF5252",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

/** just the path **/
L.geoJSON(path, {
    style: {
        "color": "#FF5252",
        "weight": 2,
        "opacity": 0.8
    },
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);

/** just the cone damge **/
L.geoJSON(cone, {
    style: {
        "color": "#FF5252",
        "weight": 1,
        "opacity": 0.75
    }
}).addTo(map);

/** your house **/
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Home",
        "popupContent": "Chance of damage: 86%"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-81.99404, 29.75621]
    }
};

var geojsonMarkerOptions2 = {
  radius: 6,
  fillColor: "#000000",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

L.geoJSON(geojsonFeature, {
  onEachFeature: onEachFeature,
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions2);
  }
}).addTo(map)

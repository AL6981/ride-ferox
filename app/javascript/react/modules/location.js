//decorator or presenter pattern
//Design Pattern
class Location {
  constructor(jsonObject) {
    {this.lat, this.lng} = jsonObject
  }

  toGoogleMapsMarker() {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1],coords[0]);
    return new google.maps.Marker({
      position: latLng
    });
  }
}

// initiatlize this with:

// new Location(userObject)
// new Location(bars)

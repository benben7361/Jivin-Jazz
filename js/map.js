function myMap() {
  var mapCanvas = document.getElementById("map");
  var location = new google.maps.LatLng(-43.5383536, 172.6435894);
  var mapOptions = {
    center: location,
    zoom: 16
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
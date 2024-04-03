function iniciarMap(){
    var coord = {lat: 10.46314 ,lng: -73.25322};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
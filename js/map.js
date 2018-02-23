
navigator.geolocation.watchPosition(myMap); 
function myMap(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var myCenter = new google.maps.LatLng(lat, lon);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myCenter,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE,
        icon: 'https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_01-128.png'
    });
    var myCity = new google.maps.Circle({
        center: myCenter,
        radius: 50000,
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0000FF",
        fillOpacity: 0.4
    });
    var infowindow = new google.maps.InfoWindow({
        content: "<h1>Peru-Lima</h1> <div class='icon-align'> <a class='facebookmap' href='#'> <icon class='fab fa-facebook-f'> </a><a class='whatsappmap' href='#'> <icon class='fab fa-whatsapp'> </a><a class='twitterpmap' href='#'> <icon class='fab fa-twitter'> </a><a class='githubpmap'  href='#'> <icon class='fab fa-github'> </a><a class='linkedinpmap' href='#'> <icon class='fab fa-linkedin-in'> </a> </div> "
    });
    myCity.setMap(map), marker.setMap(map);
    infowindow.open(map, marker);
} 
 
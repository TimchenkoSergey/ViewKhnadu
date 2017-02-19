(function() {
	"use strict";

})();

//init function for google map on contacts page
function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
	    center: {
	    	lat: 50.006039,
	    	lng: 36.243285
	    },
	    zoom: 16
	});

	//init university icon on map
	var marker = new google.maps.Marker({
		place: {
			location: { lat: 50.006000, lng: 36.243420 },
			query: 'Google, Sydney, Australia'
		},
		map: map,
		icon: "img/computing64.png"
	});

	var infoWindow = new google.maps.InfoWindow({
	    content: 'Харьковский национальный автомобильно-дорожный университет'
	});

	  // Opens the InfoWindow when marker is clicked.
	marker.addListener('click', function() {
	   infoWindow.open(map, marker);
	});

	var flightPath = new google.maps.Polyline({
	    path: [
	    	{ lat: 50.004067, lng: 36.247811 },
	    	{ lat: 50.003758, lng: 36.247484 },
	    	{ lat: 50.005651, lng: 36.242998 },
	    	{ lat: 50.005960, lng: 36.243325 }
	    ],
	    geodesic: true,
	    strokeColor: '#3f9ae1',
	    strokeOpacity: 1.0,
	    strokeWeight: 4
  	});

	flightPath.setMap(map);
}
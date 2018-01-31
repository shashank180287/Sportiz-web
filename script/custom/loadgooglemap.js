$(function() {

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(p) {
			function initMap() {
				loadMapWithGivenCoordinates(p.coords.latitude,
						p.coords.longitude);
			}
			google.maps.event.addDomListener(window, 'load', initMap);
		},
		function(error) {
			$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
	         .done (function(location) {
						loadMapWithGivenCoordinates(location.latitude, location.longitude);
				});
		});
	}

	loadContextMenu();
});

function loadMapWithGivenCoordinates(lat, long){
	var location = new google.maps.LatLng(lat,
			long);

	var mapCanvas = document.getElementById('googleMap');
	var mapOptions = {
		center : location,
		zoom : 16,
		panControl : false,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
}
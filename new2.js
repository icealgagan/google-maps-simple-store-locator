//returns the clinics which is closest to the place entered by user.
function getClosestClinicsFromPlace(center) {
	let filters = getFilters();
	console.log(clinics);

	let radius_km = 30;
	for (var j = 0; j < clinics.length; j++) {
		(function (clinic) {
			debugger;
			let position = getCoordinates(clinic);
			let latLng = {};
			var marker_lat_lng = new google.maps.LatLng(position);
			var distance_from_location = google.maps.geometry.spherical.computeDistanceBetween(center, marker_lat_lng); //distance in meters between your location and the marker
			if (distance_from_location <= radius_km * 1000) {
				var new_marker = new google.maps.Marker({
					position: marker_lat_lng,
					map: map,
				});

				allMarkers.push(new_marker);
			}
		})(clinics[j]);
	}
}

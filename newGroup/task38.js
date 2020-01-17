function getLocation() {
	if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position){
				console.log(position);
	});
		} else {
			console.log("Geolocation is not supported by this browser");
		}
}
const earthRadius = 6371000
function DTR(degree) {
	return Math.PI*degree/180;
}

function getDistance(a, b) {
	return 2*earthRadius*Math.asin(Math.sqrt(Math.sin((b.latitude - a.latitude)/2)**2 +
	Math.cos(a.latitude)*Math.cos(b.latitude)*Math.sin((b.longitude - a.longitude)/2)**2));
};

function calculateDistance(userPosition) {
	wc.forEach(function(toiletPosition, idx, arr) {
			arr[idx].distance = getDistance(userPosition.coords, toiletPosition);
		});
	};

console.log(wc.sort(function(a,b) {
	return a.distance - b.distance;
})[0]);
console.dir(wc)

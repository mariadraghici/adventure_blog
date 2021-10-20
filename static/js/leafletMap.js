
var mymap = L.map('mapid').setView([51.505, -0.09], 13);


	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

var myRenderer = L.canvas({ padding: 0.5 });


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("../static/dataset/londonAttraction.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    for( let i=0;i<1000;i++){
        if(isNaN(data[i].lat)==false && isNaN(data[i].lng)==false){
       // console.log(data[i],data[i].lng);

    	L.marker([data[i].lat, data[i].lng], {
            renderer: myRenderer
          }).addTo(mymap).bindPopup("<div class='markerMap'><h2>"+data[i].name+"</h2></div>").openPopup();



        }
    }
})

/*
	L.circle([51.508, -0.11], 500, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("I am a circle.");

	L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047],		[49.51, -0.047]
	]).addTo(mymap).bindPopup("I am a polygon.");
*/

	var popup = L.popup();



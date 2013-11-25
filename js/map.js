/*********************************/
/**** Basic Map Functionality ****/
var map = L.map('map').setView([39.283825, -76.611207], 13);
L.tileLayer('http://{s}.tile.cloudmade.com/{key}/22677/256/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2012 CloudMade',
	key: 'BC9A493B41014CAABB98F0471D759707'
}).addTo(map);

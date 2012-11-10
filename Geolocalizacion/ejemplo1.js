var lat, lon, velocidad, vectorMovimiento;

$(document).on("ready", inicio);

function inicio() {
	geolocalizar();
}

function geolocalizar() {
	//navigator: es el objeto JS que tiene todos los componentes del navegador
	//geolocation: es el objeto que tiene todo lo que es geolocalizacion
	//getCurrentPosition(): es el metodo que invoca los las funciones de GPS
	//getCurrentPosition() tiene dos parametros, el primero si la instruccion fue resuelta OK, y el segundo si fallo.
	navigator.geolocation.getCurrentPosition(mostrar, correrEnCirculos);
}

//Esta funcion recibe como parametro el error que obtuvo al ejecutar getCurrentPosition()
function correrEnCirculos(errorsh) {
	alert("Tarde o temprano te encontrare -.-");
	console.log(errorsh);
}

//Son los datos obtenidos de getCurrentPosition()
function mostrar (geo) {
	lat = geo.coords.latitude;
	lon = geo.coords.longitude;
	velocidad = geo.coords.speed;
	vectorMovimiento = geo.coords.heading;

	//var html = ['<p>'];
	var html = ['<p>Latitud: ',lat,'</p>'];
	html.push('<p>Longitud: ',lon,'</p>');
	html.push('<p>Velocidad: ',velocidad,'</p>');
	html.push('<p>Vector de Movimiento: ',vectorMovimiento,'</p>');
  	html.push('<img src="http://maps.google.com/maps/api/staticmap?center=',lat,',',lon,'&zoom=15&size=550x550&sensor=false&markers=color:red%7C',lat,',',lon,'" />');
	document.getElementById('coordenadas').innerHTML = html.join('');
}


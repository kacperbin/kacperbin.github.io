//var name = prompt("Jak masz na imię?");
//alert("Hej " +name)

//var wiek = prompt("Ile masz lat?")
var wys = 100;
var dlu = 100;


var klik  = function(){

	document.querySelector('main').style.color = 'blue';

}

var unclick = function(){

	document.querySelector('main').style.color = 'black';
}

function plus(w,d) {
	wys += w;
	dlu += d;
	var tw = wys + 'px';
	var td = dlu +'px';

	document.querySelector('img').style.height = tw;
	document.querySelector('img').style.width = td;
}

function szukaj() {
	var zapytanie = document.getElementById('zapytanie').value;
	console.log(zapytanie)
	var link = 'https://maps.google.com/?q=';
	window.open(link+zapytanie);
}
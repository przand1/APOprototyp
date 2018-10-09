drukuj = function() {
	document.getElementById("ekran").innerText += "\nDrukowanie...";
	sleep(2000).then(() => {
		document.getElementById("ekran").innerText = "Wybierz rodzaj biletu";
	});
};

pokazZasoby = function() {
	let s = "tusz: " + zasoby.tusz + "\npapier: " + zasoby.papier + "\n";
	for (var a in zasoby.pieniadze) {
		s += a + ": " + zasoby.pieniadze[a] + "\n";
	}
	alert(s);
};

doZaplatyShow = function(wynik) {
	doZaplaty = roundToTwo(doZaplaty);
	let cenaZl = parseInt(doZaplaty);
	let cenaGr = ((doZaplaty - cenaZl) * 100).toFixed(0);
	wynik += "Do zapłaty: " + cenaZl + " zł " + cenaGr + "gr.";
	document.getElementById("ekran").innerText = wynik;
};

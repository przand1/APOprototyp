let doZaplaty = 0;

doZaplatyShow = function(wynik) {
	let cenaZl = parseInt(doZaplaty);
	let cenaGr = ((doZaplaty - cenaZl) * 100).toFixed(0);
	wynik += "Do zapłaty: " + cenaZl + " zł " + cenaGr + "gr.";
	document.getElementById("ekran").innerText = wynik;
};

kupBilet = function(nr, ulg) {
	let wynik = "Kupiono " + bilety[nr].czas;
	let cena = bilety[nr].cena;
	if (ulg) {
		wynik += ", ulgowy.\n";
		cena /= 2;
	} else {
		wynik += ", normalny.\n";
	}
	doZaplaty += cena;
	doZaplatyShow(wynik);
};

platnoscG = function() {
	document.getElementById("wyborMonet").style.zIndex = 1;
};
platnoscGhide = function() {
	document.getElementById("wyborMonet").style.zIndex = -1;
};

wrzuc = function(ile) {
	doZaplaty -= ile;
	doZaplatyShow("");
	if (doZaplaty <= 0) {
		console.log("ja");
	}
};

let doZaplaty = 0;
kupBilet = function(nr, ulg) {
	let wynik = "Kupiono " + bilety[nr].czas;
	let cena = bilety[nr].cena;
	if (ulg) {
		wynik += ", ulgowy.";
		cena /= 2;
	} else {
		wynik += ", normalny.";
	}
	doZaplaty += cena;
	let cenaZl = parseInt(doZaplaty);
	let cenaGr = ((doZaplaty - cenaZl) * 100).toFixed(0);
	wynik += "\nDo zapłaty: " + cenaZl + " zł " + cenaGr + "gr.";
	document.getElementById("ekran").innerText = wynik;
};

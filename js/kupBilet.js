kupBilet = function(nr, ulg) {
	if (zasoby.papier == 0) {
		document.getElementById("ekran").innerText += "Brak papieru!";
	} else if (zasoby.tusz == 0) {
		document.getElementById("ekran").innerText += "Brak tuszu!";
	} else {
		zasoby.papier--;
		zasoby.tusz--;
		bilCount++;
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
	}
};

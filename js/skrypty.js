let doZaplaty = 0;
let zaplacono = {};

doZaplatyShow = function(wynik) {
	doZaplaty = roundToTwo(doZaplaty);
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
	document.getElementById("wyborMonet").style.visibility = "visible";
};
platnoscGhide = function() {
	document.getElementById("wyborMonet").style.zIndex = -1;
	document.getElementById("wyborMonet").style.visibility = "hidden";
};

wrzuc = function(ile, m) {
	if (typeof zaplacono[m] === "undefined") {
		zaplacono[m] = 1;
	} else {
		zaplacono[m]++;
	}
	doZaplaty -= ile;
	doZaplatyShow("");
	if (doZaplaty <= 0) {
		platnoscGhide();
		dodajPndze(zaplacono, true);
		if (doZaplaty == 0) {
			document.getElementById("ekran").innerText = "Drukowanie...";
			drukuj();
		} else {
			let doWydania = wydajReszte(-doZaplaty);
			if (doWydania) {
				document.getElementById("ekran").innerText = "Wydaję resztę:";
				dodajPndze(doWydania, false);
			} else {
				document.getElementById("ekran").innerText =
					"Nie można wydać reszty.";
			}
			doZaplaty = 0;
		}
	}
};
drukuj = function() {};
wydajReszte = function(reszta) {
	let i = 0;
	let wydane = {};
	while (i <= nominaly.length) {
		if (reszta == 0) {
			return wydane; //sukces
		} else if (
			nominaly[i].wartosc <= reszta &&
			zasoby.pieniadze[nominaly[i].nazwa] > 0
		) {
			//dodaj do wydanych
			if (typeof wydane[nominaly[i].nazwa] === "undefined") {
				wydane[nominaly[i].nazwa] = 1;
			} else {
				wydane[nominaly[i].nazwa]++;
			}
			reszta = roundToTwo(reszta - nominaly[i].wartosc);
		} else {
			i++; //zmniejsz nominał
		}
	}
	return NULL; //porażka
};
dodajPndze = function(ob, znak) {
	if (znak == true) {
		for (let el in ob) {
			if (ob.hasOwnProperty(el)) {
				zasoby.pieniadze[el] += ob[el];
			}
		}
	} else {
		for (let el in ob) {
			if (ob.hasOwnProperty(el)) {
				zasoby.pieniadze[el] -= ob[el];
			}
		}
	}
};
function roundToTwo(num) {
	return +(Math.round(num + "e+2") + "e-2");
}
pokazZasoby = function() {
	let s = "tusz: " + zasoby.tusz + "\npapier: " + zasoby.papier + "\n";
	for (var a in zasoby.pieniadze) {
		s += a + ": " + zasoby.pieniadze[a] + "\n";
	}
	alert(s);
};

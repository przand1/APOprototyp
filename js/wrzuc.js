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
			drukuj();
		} else {
			let doWydania = wydajReszte(-doZaplaty);
			if (doWydania == -1) {
				zasoby.tusz += bilCount;
				zasoby.papier += bilCount;
				document.getElementById("ekran").innerText =
					"Nie można wydać reszty.\nZwrot pieniędzy:";
				for (let x in zaplacono) {
					zasoby.pieniadze[x] -= zaplacono[x];
					for (let i = 0; i < zaplacono[x]; i++) {
						document.getElementById("ekran").innerText += ` ${x}`;
					}
				}

				document.getElementById("ekran").innerText +=
					"\nWybierz rodzaj biletu";
			} else {
				document.getElementById("ekran").innerText = "Wydaję resztę:";
				for (let x in doWydania) {
					for (let i = 0; i < doWydania[x]; i++) {
						document.getElementById("ekran").innerText += ` ${x}`;
					}
				}
				drukuj();
			}
			doZaplaty = 0;
		}
		zaplacono = {};
		bilCount = 0;
	}
};

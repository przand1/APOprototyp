anuluj = function() {
	document.getElementById("ekran").innerText = "Anulowano\n";
	doZaplaty = 0;
	zasoby.papier += bilCount;
	zasoby.tusz += bilCount;
	bilCount = 0;
	if (zaplacono != {}) {
		document.getElementById("ekran").innerText += "Zwrot pieniędzy:";
		for (let x in zaplacono) {
			for (let i = 0; i < zaplacono[x]; i++) {
				document.getElementById("ekran").innerText += ` ${x}`;
			}
		}
		zaplacono = {};
	}
	document.getElementById("ekran").innerText += "Wybierz rodzaj biletu";
};

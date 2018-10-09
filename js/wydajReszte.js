wydajReszte = function(reszta) {
	let i = 0;
	let wydane = {};
	while (i < nominaly.length) {
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
			zasoby.pieniadze[nominaly[i].nazwa]--; //odejmij od zasobów
			reszta = roundToTwo(reszta - nominaly[i].wartosc);
		} else {
			i++; //zmniejsz nominał
		}
	}
	dodajPndze(wydane, true);
	return -1; //porażka
};

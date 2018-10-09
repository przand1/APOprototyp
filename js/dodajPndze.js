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

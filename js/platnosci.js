platnoscG = function() {
	document.getElementById("wyborMonet").style.zIndex = 1;
	document.getElementById("wyborMonet").style.visibility = "visible";
};
platnoscGhide = function() {
	document.getElementById("wyborMonet").style.zIndex = -1;
	document.getElementById("wyborMonet").style.visibility = "hidden";
};
platnoscK = function() {
	document.getElementById("ekran").innerText =
		"Płatność kartą zakończna poprawnie.";
	doZaplaty = 0;
	drukuj();
};

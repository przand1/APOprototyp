let zasoby = {
	papier: 10,
	tusz: 10,
	pieniadze: {
		gr1: 20,
		gr2: 14,
		gr5: 5,
		gr10: 13,
		gr20: 6,
		gr50: 7,
		zl1: 2,
		zl2: 5,
		zl5: 4,
		zl10: 2,
		zl20: 3,
		zl50: 1,
		zl100: 0,
		zl200: 0,
	},
};
let bilety = [
	{ czas: "10min", cena: 3 },
	{ czas: "40min", cena: 4.6 },
	{ czas: "24h", cena: 13.6 },
	{ czas: "48h", cena: 21 },
	{ czas: "72h", cena: 27 },
	{ czas: "7d", cena: 47 },
];
let nominaly = [
	{ wartosc: 200, nazwa: "zl200" },
	{ wartosc: 100, nazwa: "zl100" },
	{ wartosc: 50, nazwa: "zl50" },
	{ wartosc: 20, nazwa: "zl20" },
	{ wartosc: 10, nazwa: "zl10" },
	{ wartosc: 5, nazwa: "zl5" },
	{ wartosc: 2, nazwa: "zl2" },
	{ wartosc: 1, nazwa: "zl1" },
	{ wartosc: 0.5, nazwa: "gr50" },
	{ wartosc: 0.2, nazwa: "gr20" },
	{ wartosc: 0.1, nazwa: "gr10" },
	{ wartosc: 0.05, nazwa: "gr5" },
	{ wartosc: 0.02, nazwa: "gr2" },
	{ wartosc: 0.01, nazwa: "gr1" },
];

let doZaplaty = 0;
let zaplacono = {};
let bilCount = 0;

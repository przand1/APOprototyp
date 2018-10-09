function roundToTwo(num) {
	return +(Math.round(num + "e+2") + "e-2");
}
const sleep = milliseconds => {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
};

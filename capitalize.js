function capitalize(str) {
	let capitalized = str.split("");
	capitalized[0] = str.split("")[0].toUpperCase();
	return capitalized.join('');
}
module.exports = capitalize;
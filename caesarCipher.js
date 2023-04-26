function caesarCipher(str, shift) {
	let sAlphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
	let bAlphabet = sAlphabet.join(" ").toUpperCase().split(" ");
	if (shift < 0) {
		sAlphabet = sAlphabet.reverse();
		bAlphabet = bAlphabet = sAlphabet.join(" ").toUpperCase().split(" ");
		shift = Math.abs(shift);
	}
	let cipherText = str.split("");
	cipherText = cipherText.map((char) => {
		let index;
		if (sAlphabet.indexOf(char) != -1) {
			index = sAlphabet.indexOf(char);
			return sAlphabet[((index)+shift)%26];
		}
		if (bAlphabet.indexOf(char) != -1) {
			index = bAlphabet.indexOf(char);
			return bAlphabet[((index)+shift)%26];
		}
		return char;
	});
	return cipherText.join("");
}
module.exports = caesarCipher;
// An analyzeArray function that takes an array of numbers 
// and returns an object with the following properties: 
// average, min, max, and length.
function analyzeArray(array) {
	const result = {
		average: null,
		min: null,
		max: null,
		length:null
	}
	result.average = array.reduce((curr,prev) => curr + prev)/array.length;
	result.min = Math.min(...array);
	result.max = Math.max(...array);
	result.length = array.length;
	return result;
}
module.exports = analyzeArray;
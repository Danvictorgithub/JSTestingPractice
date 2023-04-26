// A calculator object that contains functions for the basic operations: 
// add, subtract, divide, and multiply. 
// Each of these functions should take two numbers and 
// return the correct calculation.
class Calculator {
	add(a,b) {
		return a+b;
	}
	subtract(a,b) {
		return a-b;
	}
	divide(a,b) {
		try {
			return a/b;
		}
		catch (error) {
			return (error);
		}
	}
	multiply(a,b) {
		return a*b;
	}
}
// const calculator = new Calculator();
// console.log(calculator.divide(5,0));
module.exports = Calculator;
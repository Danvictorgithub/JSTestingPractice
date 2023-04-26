const Calculator = require("./calculator");

test("Calculator Class add Function: 1+5", () => {
	const calculator = new Calculator();
	expect(calculator.add(1,5)).toBe(6);
});
test("Calculator Class add Function: 7+0", () => {
	const calculator = new Calculator();
	expect(calculator.add(7,0)).toBe(7);
});

test("Calculator Class subtract Function: 1-5", () => {
	const calculator = new Calculator();
	expect(calculator.subtract(1,5)).toBe(-4);
});
test("Calculator Class subtract Function: 6-3", () => {
	const calculator = new Calculator();
	expect(calculator.subtract(6,3)).toBe(3);
});

test("Calculator Class subtract Function: 1-5", () => {
	const calculator = new Calculator();
	expect(calculator.subtract(1,5)).toBe(-4);
});
test("Calculator Class subtract Function: 6-3", () => {
	const calculator = new Calculator();
	expect(calculator.subtract(6,3)).toBe(3);
});

test("Calculator Class divide Function: 10 / 5", () => {
	const calculator = new Calculator();
	expect(calculator.divide(10,5)).toBe(2);
});
test("Calculator Class divide Function: 25 / 0", () => {
	const calculator = new Calculator();
	expect(calculator.divide(25,0)).toBe(Infinity);
});

test("Calculator Class multiply Function: 10 * 10", () => {
	const calculator = new Calculator();
	expect(calculator.multiply(10,10)).toBe(100);
});
test("Calculator Class divide Function: 25 * 10", () => {
	const calculator = new Calculator();
	expect(calculator.multiply(25,10)).toBe(250);
});
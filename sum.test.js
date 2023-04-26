const sum = require("./sum.js");

test("test init",()=> {
	const data = 1;
	expect(data).toBe(1);
});

test("Sum Function: 1+2",() => {
	expect(sum(1,2)).toBe(3);
});
test("Sum Function: 420+55",() => {
	expect(sum(420,55)).toBe(475);
});
test("Sum Function: 60+40",() => {
	expect(sum(60,40)).toBe(100);
});
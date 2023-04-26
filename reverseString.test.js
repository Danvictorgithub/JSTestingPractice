const reverseString = require("./reverseString");reverseString

test("Reverse String Function: tag",() => {
	expect(reverseString("tag")).toBe("gat");
});
test("Reverse String Function: asdfghjkl",() => {
	expect(reverseString("asdfghjkl")).toBe("lkjhgfdsa");
});
const caesarCipher = require("./caesarCipher");

test("Caesar Cipher Function: abc with 2 move index",() => {
	expect(caesarCipher("abc",2)).toBe("cde");
});
test("Caesar Cipher Function with Capital Letters and 1 move index: Hello",() => {
	expect(caesarCipher("XYz",1)).toBe("YZa");
});
test("Caesar Cipher Function with -1 move index: aBc",() => {
	expect(caesarCipher("aBc",-1)).toBe("zAb");
});
test("Caeasr Cipher Function with Punctuation: Bcd,abc with 1 move index", () => {
	expect(caesarCipher("Bcd,abc",1)).toBe("Cde,bcd");
});
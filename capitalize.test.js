const capitalize = require("./capitalize.js");

test("Capitalize Function: memes",() => {
	expect(capitalize("memes")).toBe("Memes");
});
test("Capitalize Function: victory",() => {
	expect(capitalize("victory")).toBe("Victory");
});
test("Capitalize Function: emergence",() => {
	expect(capitalize("emergence")).toBe("Emergence");
});
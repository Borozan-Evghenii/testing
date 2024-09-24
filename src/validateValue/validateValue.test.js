const validateValue = require("./validateValue");

// test("validateValue", () => {
// 	expect(validateValue(10)).toBe(true);
// })

describe("validateValue", () => {
  test("Correct value", () => {
    expect(validateValue(10)).toBe(true);
  });
  test("Great then correct value", () => {
    expect(validateValue(110)).toBe(false);
  });
  test("Smaller then correct value", () => {
    expect(validateValue(-10)).toBe(false);
  });
});

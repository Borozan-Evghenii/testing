import { describe, expect, test } from "vitest";
import { isValidValue } from "./isValidValue";

test("IsValidValue ", () => {
  expect(isValidValue(100)).toBe(true);
});

// need to run more scenarios wrap tests in describe by group it

describe("IsValidValue ", () => {
  test("the highest valid value", () => {
    expect(isValidValue(100)).toBe(true);
  });
  test("the lowest valid value", () => {
    expect(isValidValue(0)).toBe(true);
  });
  test("the middle valid value", () => {
    expect(isValidValue(50)).toBe(true);
  });
  test("invalid value for highest level", () => {
    expect(isValidValue(110)).toBe(false);
  });
  test("invalid value for lowest level", () => {
    expect(isValidValue(-1)).toBe(false);
  });
});

import { expect, test } from "vitest";
import { isValidValue } from "./isValidValue";

test("IsValidValue ", () => {
  expect(isValidValue(100)).toBe(true);
});

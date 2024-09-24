import { describe, expect, test } from "vitest";
import { arrToString } from "./arrToString";

describe("arrToString ", () => {
  test("number array ", () => {
    expect(arrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
    // instead of toBe([]) must be used toEqual()
  });
  test("full string array ", () => {
    expect(arrToString(["1", "2", "3"])).toEqual([]);
  });
  test("array which contain string", () => {
    expect(arrToString([1, 2, 3, "sadda", "@"])).toEqual(["1", "2", "3"]);
  });
  test("empty array ", () => {
    expect(arrToString([])).toEqual([]);
  });
  test("empty array with negation ", () => {
    expect(arrToString([])).not.toEqual([1, 2, 3]);
  });
});

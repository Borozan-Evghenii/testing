import { describe, expect, test } from "vitest";
import { getCounterValue } from "./getCounterValue";

describe("Selector getCounterValue", () => {
  test("initial value", () => {
    expect(getCounterValue({})).toBe(0);
  });
  test("filled value", () => {
    expect(getCounterValue({ counter: { value: 100 } })).toBe(100);
  });
});

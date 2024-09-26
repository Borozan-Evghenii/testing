import { describe, expect, test } from "vitest";
import counterReducer, { decrement, increment } from "./counterReducer";

describe("counter Reducer", () => {
  test("increment", () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });
  test("increment", () => {
    expect(counterReducer({ value: 10 }, decrement())).toEqual({ value: 9 });
  });
  test("increment empty state", () => {
    expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
  });
  test("decrement empty state", () => {
    expect(counterReducer(undefined, decrement())).toEqual({ value: -1 });
  });
});

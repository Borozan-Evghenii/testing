import { beforeAll, describe, expect, test } from "vitest";
import { delay } from "./delay";

describe("arrToString ", () => {
  let callback: () => void;
  const ms = 1000;
  beforeAll(() => {
    callback = (): number => 5 + 5;
  });

  test("Async test", async () => {
    const sum = await delay(callback, ms);
    expect(sum).toEqual(10);
  });
});

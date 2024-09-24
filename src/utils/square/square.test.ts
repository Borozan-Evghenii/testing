import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";
import { square } from "./square";

describe("Square number ", () => {
  beforeEach(() => {
    // set changeable value
  });
  // usually used for set some value before each test (value can be changed at each test )
  beforeAll(() => {
    // set user mock data
  });
  // usually used for set value one time before all testes

  test("valid value", () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();
  });

  test("pow is called one time", () => {
    const pow = vi.spyOn(Math, "pow");
    square(2);
    expect(pow).toBeCalledTimes(1);
  });

  test("pow isn't called", () => {
    const pow = vi.spyOn(Math, "pow");
    square(1);
    expect(pow).toBeCalledTimes(0);
  });

  afterEach(() => {
    // set changeable value
    vi.clearAllMocks();
    // if don't clear mock after each test "pow isn't called" will be failed because mocked pow already register function call in previous test
  });
  // usually used for clear some value after each test

  afterAll(() => {
    // clear user mock data
  });
  // usually used for clear some value one time after all testes
});

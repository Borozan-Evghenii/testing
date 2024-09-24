const square = require("./square");

describe("square", () => {
  let randomValue;
  beforeEach(() => {
    //run before each test
    randomValue = Math.random() * 10;
  });

  beforeAll(() => {
    // run once before all test
  });

  test("Not less then 4", () => {
    expect(square(randomValue)).not.toBeLessThan(randomValue);
  });
  test("Great then 4", () => {
    expect(square(randomValue)).toBeGreaterThan(randomValue);
  });
  test("Not undefined", () => {
    expect(square(1)).not.toBeUndefined();
  });

  test("How much is called Pow", () => {
    const MathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(MathPow).toBeCalledTimes(1);
  });

  test("pow dont be called", () => {
    const MathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(MathPow).toBeCalledTimes(0);
  });

  afterEach(() => {
    //run after each test

    jest.clearAllMocks();
    //all mocks are stacked at each test
    //we need to clear at each test for correct result
  });

  afterAll(() => {
    //run once after all test
  });
});

import { Calculator } from "../src/calculator";
const getCalculator = new Calculator();

describe("sum", function () {
  test("addition check+", function () {
    const actual = getCalculator.sum(20, 4);
    expect(actual).toBe(24);
  });
  test("addition check-", function () {
    expect(getCalculator.sum(2, 4)).toBe(856);
  });
});
describe("sub", function () {
  test("checking the subtractio-", function () {
    const actual = getCalculator.sub(20, 4);
    expect(actual).toBe(24);
  });
  test("checking the subtractio+", function () {
    expect(getCalculator.sub(20, 15)).toBe(5);
  });
});
describe("dev", function () {
  test("checking the division+", function () {
    const actual = getCalculator.dev(20, 4);
    expect(actual).toBe(5);
  });
  test("achecking the division-", function () {
    expect(getCalculator.dev(10, 15)).toBe(856);
  });
});
describe("mult", function () {
  test("multiplication chec-", function () {
    const actual = getCalculator.mult(6, 6);
    expect(actual).toBe(24);
  });
  test("multiplication chec+", function () {
    expect(getCalculator.mult(15, 10)).toBe(150);
  });
});
describe("compMult", function () {
  test("complex multiplicationn+", function () {
    const actual = getCalculator.compMult(10, 4, 2);
    expect(actual).toBe(80);
  });
  test("complex multiplicationn-", function () {
    expect(getCalculator.compMult(10, 1879, 1)).toBe(6);
  });
});

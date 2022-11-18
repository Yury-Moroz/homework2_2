import { Calculator } from "../src/calculator";
import { expect } from "chai";
const getCalculator = new Calculator();

describe("sum", function () {
  it("addition check+", function () {
    const actual = getCalculator.sum(3, 3);
    expect(actual, "if the addition is not completed, we output an error").to.equal(6);
  });
  it("addition check-", function () {
    const actual = getCalculator.sum(2, 4);
    expect(actual, "if the addition is not completed, we output an error").to.equal(856);
  });
});
describe("sub", function () {
  it("checking the subtractio+", function () {
    const actual = getCalculator.sub(36, 16);
    expect(actual, "if the subtraction is not performed, we output an error").to.equal(20);
  });
  it("checking the subtractio-", function () {
    const actual = getCalculator.sub(22, 4);
    expect(actual, "if the subtraction is not performed, we output an error").to.equal(-856);
  });
});
describe("dev", function () {
  it("checking the division+", function () {
    const actual = getCalculator.dev(200, 4);
    expect(actual, "if the division is not performed, we output an error").to.equal(50);
  });
  it("checking the division-", function () {
    const actual = getCalculator.dev(200, 4);
    expect(actual, "if the division is not performed, we output an error").to.equal(55);
  });
});
describe("mult", function () {
  it("multiplication chec+", function () {
    const actual = getCalculator.mult(15, 7);
    expect(actual, "if multiplication is not performed, we output an error").to.equal(105);
  });
  it("multiplication check-", function () {
    const actual = getCalculator.mult(15, 7);
    expect(actual, "if multiplication is not performed, we output an error").to.equal(211);
  });
});
describe("compMult", function () {
  it("complex multiplication+", function () {
    const actual = getCalculator.compMult(2, 4, 17);
    expect(actual, "if the complex multiplication is not performed, we output an error").to.equal(136);
  });
  it("complex multiplication-", function () {
    const actual = getCalculator.compMult(2, 4, 800);
    expect(actual, "if the complex multiplication is not performed, we output an error").to.equal(1857);
  });
});

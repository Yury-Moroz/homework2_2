import { Calculator } from "../src/calculator";
import assert from "assert";
const getCalculator = new Calculator();
describe("sum", function () {
  it("addition check+", function () {
    assert.equal(getCalculator.sum(3, 3), 6, "if the addition is not completed, we output an error");
  });
  it("addition check-", function () {
    assert.equal(getCalculator.sum(3, 113), 2, "if the addition is not completed, we output an error");
  });
});
describe("sub", function () {
  it("checking the subtraction+", function () {
    assert.equal(getCalculator.sub(36, 16), 20, "if the subtraction is not performed, we output an error");
  });
  it("checking the subtraction-", function () {
    assert.equal(getCalculator.sub(96, 16), 2, "if the subtraction is not performed, we output an error");
  });
});
describe("dev", function () {
  it("checking the division+", function () {
    assert.equal(getCalculator.dev(200, 4), 502, "if the division is not performed, we output an error");
  });
  it("checking the division-", function () {
    assert.equal(getCalculator.dev(200, 11), 2, "if the division is not performed, we output an error");
  });
});
describe("mult", function () {
  it("multiplication check+", function () {
    assert.equal(getCalculator.mult(15, 7), 105, "if multiplication is not performed, we output an error");
  });
  it("multiplication check-", function () {
    assert.equal(getCalculator.mult(158, 7), 22, "if multiplication is not performed, we output an error");
  });
});
describe("compMult", function () {
  it("complex multiplication+", function () {
    assert.equal(
      getCalculator.compMult(2, 4, 17),
      136,
      "if the complex multiplication is not performed, we output an error",
    );
  });
  it("complex multiplication-", function () {
    assert.equal(
      getCalculator.compMult(2, 78, 107),
      192,
      "if the complex multiplication is not performed, we output an error",
    );
  });
});

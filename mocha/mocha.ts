import assert from "assert";
class Calculater {
  sum(a: number, b: number) {
    return a + b;
  }
  sub(a: number, b: number) {
    return a - b;
  }
  dev(a: number, b: number) {
    return a / b;
  }
  mult(a: number, b: number) {
    return a * b;
  }
  compMult(a: number, b: number, c: number) {
    return a * b * c;
  }
}
const getCalculater = new Calculater();
describe("sum", function () {
  it("addition check+", function () {
    assert.equal([2 + 4], 6, "error");
  });
  it("addition check-", function () {
    assert.equal([2 + 4], 2, "error");
  });
});
describe("sub", function () {
  it("checking the subtraction+", function () {
    assert.equal([2 - 4], -2, "error");
  });
  it("checking the subtraction-", function () {
    assert.equal([20 + 4], 2, "error");
  });
});
describe("dev", function () {
  it("checking the division+", function () {
    assert.equal([8 / 4], 2, "error");
  });
  it("checking the division-", function () {
    assert.equal([80 / 4], 2, "error");
  });
});
describe("mult", function () {
  it("multiplication check+", function () {
    assert.equal([2 * 4], 8, "error");
  });
  it("multiplication check-", function () {
    assert.equal([2 * 4], 22, "error");
  });
});
describe("compMult", function () {
  it("complex multiplication+", function () {
    assert.equal([2 * 4 * 16], 128, "error");
  });
  it("complex multiplication-", function () {
    assert.equal([2 * 4 * 16], 192, "error");
  });
});

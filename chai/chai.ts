import assert from "assert";
import { expect } from "chai";
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
    const actual = 2 + 4;
    expect(actual, "error").to.equal(6);
  });
  it("addition check-", function () {
    const actual = 2 + 4;
    expect(actual, "error").to.equal(856);
  });
});
describe("sub", function () {
  it("checking the subtractio+", function () {
    const actual = 20 - 4;
    expect(actual, "error").to.equal(16);
  });
  it("checking the subtractio-", function () {
    const actual = 22 - 4;
    expect(actual, "error").to.equal(-856);
  });
});
describe("dev", function () {
  it("checking the division+", function () {
    const actual = 200 / 4;
    expect(actual, "error").to.equal(50);
  });
  it("checking the division-", function () {
    const actual = 223 / 4;
    expect(actual, "error").to.equal(55);
  });
});
describe("mult", function () {
  it("multiplication chec+", function () {
    const actual = 15 * 7;
    expect(actual, "error").to.equal(105);
  });
  it("multiplication check-", function () {
    const actual = 2 * 4;
    expect(actual, "error").to.equal(211);
  });
});
describe("compMult", function () {
  it("complex multiplication+", function () {
    const actual = 2 * 4 * 17;
    expect(actual, "error").to.equal(136);
  });
  it("complex multiplication-", function () {
    const actual = 2 * 4 * 800;
    expect(actual, "error").to.equal(1857);
  });
});

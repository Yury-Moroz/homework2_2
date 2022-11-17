class Calculater2 {
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
const getCalculater2 = new Calculater2();

describe("sum", function () {
  test("addition check+", function () {
    const actual = 20 + 4;
    expect(actual).toBe(24);
  });
  test("addition check-", function () {
    expect(10 + 15).toBe(856);
  });
});
describe("sub", function () {
  test("checking the subtractio-", function () {
    const actual = 20 - 4;
    expect(actual).toBe(24);
  });
  test("checking the subtractio+", function () {
    expect(15 - 10).toBe(5);
  });
});
describe("devm", function () {
  test("checking the division+", function () {
    const actual = 20 / 4;
    expect(actual).toBe(5);
  });
  test("achecking the division-", function () {
    expect(10 / 15).toBe(856);
  });
});
describe("mult", function () {
  test("multiplication chec-", function () {
    const actual = 20 * 4;
    expect(actual).toBe(24);
  });
  test("multiplication chec+", function () {
    expect(15 * 10).toBe(150);
  });
});
describe("compMult", function () {
  test("complex multiplicationn+", function () {
    const actual = 20 * 4 * 2;
    expect(actual).toBe(160);
  });
  test("complex multiplicationn-", function () {
    expect(10 * 15 * 1250).toBe(6);
  });
});

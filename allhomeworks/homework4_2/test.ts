class Calculater {
  constructor() {}
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
  els(a: number, b: number) {
    return a > b;
  }
  proc(a: number, b: number) {
    return a % b;
  }
}
const getCalculater = new Calculater();
const sum1 = getCalculater.sum(21, 12) === 33 ? `ok` : `ne ok`;
console.log(sum1);
const sub1 = getCalculater.sub(21, 143) === 17 ? `ok` : `ne ok`;
console.log(sub1);
const dev1 = getCalculater.dev(2, 2) === 1 ? `ok` : `ne ok`;
console.log(dev1);
const mult1 = getCalculater.mult(23, 3) === 17 ? `ok` : `ne ok`;
console.log(mult1);
const else1 = getCalculater.els(2000, 200) === true ? `ok` : `ne ok`;
console.log(else1);
const proc1 = getCalculater.proc(40, 8) === 0 ? `ok` : `ne ok`;
console.log(proc1);

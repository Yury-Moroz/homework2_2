const fibonaccil: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const res: number = fibonaccil.reduce((accum: number, value: number) => {
  accum = accum + value;
  return accum;
}, 0);
console.log(res);

const res2: number = fibonaccil.reduce(function (accum: number, value: number) {
  accum = accum + value;
  return accum;
}, 0);
console.log(res);

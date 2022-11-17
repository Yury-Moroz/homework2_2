function getSum(a: number, b: number): number {
  let sum = 0;
  let min;
  let max;
  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }
  while (min <= max) {
    sum += min;
    min++;
  }
  return sum;
}
console.log(getSum(1, 3));

let sum = 1;
(function factorial(a: number) {
  for (let i = 1; i <= a; i++) {
    sum = sum * i;
  }
  console.log(sum);
})(10);

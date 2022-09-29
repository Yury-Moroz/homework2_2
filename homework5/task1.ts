let result = 0;
function getSum(a: number) {
  for (let i = 0; i <= a; i++) {
    result = result + i;
  }
  return result;
}
console.log(getSum(5));

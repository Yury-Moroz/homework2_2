const numbers: number[] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const firstNumber: number | undefined = numbers.find((value: number) => {
  return value % 2 === 0;
});
console.log(firstNumber);

const numbers2: number[] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const firstNumber2: number | undefined = numbers2.find(function (value2: number) {
  return value2 % 2 === 0;
});
console.log(firstNumber2);

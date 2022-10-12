const numbers: number[] = [5, 9, 13, 24, 54, 10, 13, 99, 15, 1, 5];
const nymeroys: boolean = numbers.some((value: number) => {
  return value % 3 === 0 && value % 5 === 0;
});
console.log(nymeroys);

const numbers2: number[] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const nymeroys2: boolean = numbers2.some(function (value: number) {
  return value % 3 === 0 && value % 5 === 0;
});
console.log(nymeroys2);

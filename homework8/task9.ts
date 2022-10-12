const numbers: number[] = [
  1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5,
];
const mySet = new Set(numbers);
console.log(mySet);
console.log([...mySet]);
console.log(`=================================`);
function numb(myArr: number[]) {
  const mySet2 = new Set(myArr);
  return [...mySet2];
}
console.log(numb(numbers));
console.log(`=================================`);
const numb2 = (myArr: number[]) => {
  const mySet = new Set(myArr);
  return [...mySet];
};
console.log(numb2(numbers));

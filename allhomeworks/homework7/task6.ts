const evenNumbers: number[] = [2, 4, 6, 8, 10];
const oddNumbers: number[] = [1, 3, 5, 7, 9];
const result: number[] = [...evenNumbers, ...oddNumbers];
console.log(result);
console.log(result.indexOf(8));

const evenNumbers2: number[] = [2, 4, 6, 8, 10];
const oddNumbers2: number[] = [1, 3, 5, 7, 9];
const result2: number[] = oddNumbers2.concat(evenNumbers2);
console.log(result2);
console.log(result2.indexOf(8));

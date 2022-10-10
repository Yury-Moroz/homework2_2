const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
const positiveNumbers = [];
const negativeNymbers = [];
for (const numbers of mixedNumbers) {
  if (numbers >= 0) {
    positiveNumbers.push(numbers);
  } else {
    negativeNymbers.push(numbers);
  }
}
console.log(positiveNumbers);
console.log(negativeNymbers);

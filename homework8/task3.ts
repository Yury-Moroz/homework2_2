const numbers: number[] = [7, -4, 32, -90, 54, 32, -21];
const positiveNumbers: number[] = numbers.filter((allnumbers: number) => {
  return allnumbers >= 0;
});
console.log(positiveNumbers);

const positiveNumbers2: number[] = numbers.filter(function (allnumbers: number) {
  return allnumbers >= 0;
});
console.log(positiveNumbers2);

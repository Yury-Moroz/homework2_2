const matrix = [
  [1, 2, 4, 5],
  [4, 4, 6, 7],
  [2, 4, 67],
];
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
  console.log(sum / matrix[i].length);
  sum = 0;
}

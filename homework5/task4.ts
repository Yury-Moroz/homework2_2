function getSumNumbers(numbers: number) {
  const asString = String(numbers);
  let summ = 0;
  for (let i = 0; i < asString.length; i++) {
    summ = summ + parseInt(asString[i]);
  }
  return summ;
}
console.log(getSumNumbers(2021));

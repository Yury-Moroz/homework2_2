const numbers: number[] = [2, 2, 32];
const numb: boolean = numbers.every((value: number) => {
  const value1 = value ** 2;
  let summ = 0;
  const asString = String(value1);
  for (let i = 0; i < asString.length; i++) {
    summ = summ + parseInt(asString[i]);
  }
  return summ % 2 === 0;
});
console.log(numb);
//вроде ход правильный, но результат не думаю, что верный

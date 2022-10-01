console.log("strarting program");
function getSumNumbers(numbers: number) {
  console.log("consumed value: " + numbers);
  const asString = String(numbers); //represent it as string
  let summ = 0; //initial value is null
  for (let i = 0; i < asString.length; i++) {
    //pick dicits by index
    summ = summ + parseInt(asString[i]);
  }
  return summ;
}

console.log(getSumNumbers(1237)); //log result

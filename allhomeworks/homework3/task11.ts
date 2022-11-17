const a = "Fiz";
const b = "Buz";
const c = "FizBuz";
for (let i = 1; i <= 20; i++) {
  if (i % 5 === 0) {
    console.log(a);
  }
  if (i % 3 === 0) {
    console.log(b);
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(c);
  }
}

const salaries: any = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey2: 664,
  alexandra: 199,
};
const size = Object.keys(salaries).length;
console.log(size);
let sumSalaries = 0;
for (const key in salaries) {
  sumSalaries += salaries[key];
}
const middleSalaries = sumSalaries / 5;
console.log(`middleSalaries ===> ${middleSalaries}`);

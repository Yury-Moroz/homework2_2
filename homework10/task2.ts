const people1 = {
  peopleName: "Lutik",
};
const people2 = {
  peopleName: "Gerald",
};
function sayName(this: any) {
  console.log(`My name is ${this.peopleName}`);
}
sayName.call(people1);
sayName.call(people2);
sayName.apply(people1);
sayName.apply(people2);

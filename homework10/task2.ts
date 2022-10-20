type TPeople = {
  peopleName: string;
};
const people1: TPeople = {
  peopleName: "Lutik",
};
const people2: TPeople = {
  peopleName: "Gerald",
};
function sayName(this: TPeople) {
  console.log(`My name is ${this.peopleName}`);
}
sayName.call(people1);
sayName.call(people2);
sayName.apply(people1);
sayName.apply(people2);

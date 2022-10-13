class Animal {
  static classAnimal = "feline";
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getFelineClass() {
    return `This is a ${Animal.classAnimal}. It's name is ${this.name}.`;
  }
}
const tiger = new Animal("tiger");
const lion = new Animal("lion");
const puma = new Animal("puma");
const cat = new Animal("cat");
console.log(tiger.getFelineClass());
console.log(lion.getFelineClass());
console.log(puma.getFelineClass());
console.log(cat.getFelineClass());

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
console.log(`===========================`);
class Animals {
  name: string;
  color: string;
  paws: number;
  static tailAnimals = "tail";
  constructor(name: string, color: string, paws: number) {
    this.name = name;
    this.color = color;
    this.paws = paws;
  }
  descriptionOfAnimals() {
    return `this is a ${this.name}, it has ${this.paws} paws, ${this.color} color, and has a ${Animals.tailAnimals}`;
  }
}
const bear = new Animals("bear", "brown", 4);
const fox = new Animals("fox", "red", 4);
const hair = new Animals("hair", "white or grey", 4);
const wolf = new Animals("wolf", "grey", 4);
console.log(bear.descriptionOfAnimals());
console.log(fox.descriptionOfAnimals());
console.log(hair.descriptionOfAnimals());
console.log(wolf.descriptionOfAnimals());

//this.getSound = function () {
//return this.voice;
// в TS можно добавлять функцию в constructor? или это только для JS?

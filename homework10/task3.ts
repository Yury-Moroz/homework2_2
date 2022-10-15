//Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль.
//   В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах.
//    К примеру `This car has 3 doors and this is left-hand drive car`
const car1 = {
  doors: 3,
  hand: "left-hand",
};
const car2 = {
  doors: 5,
  hand: "right-hand",
};
function getCar(this: any) {
  console.log(`This car has ${this.doors} doors and this is ${this.hand} drive car`);
}
getCar.call(car1);
getCar.call(car2);
getCar.apply(car1);
getCar.apply(car2);

const myCar = getCar.bind(car1);
const myCar2 = getCar.bind(car2);
myCar();
myCar2();

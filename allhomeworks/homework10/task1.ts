class Car {
  constructor(public brand: string, protected typeMotor: string) {}

  carInfo() {
    return `This is ${this.brand}. It has ${this.typeMotor} engine`;
  }
}
class SportCar extends Car {
  constructor(public brand: string, protected typeMotor: string, private maxSpeed: string, public coast: string) {
    super(brand, typeMotor);
    this.maxSpeed = maxSpeed;
    this.coast = coast;
  }

  carInfo() {
    return `This is ${this.brand}. It has ${this.typeMotor} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.coast}.`;
  }
}
class LuxuryCar extends Car {
  constructor(public brand: string, protected typeMotor: string, private maxSpeed: string, private coast: string) {
    super(brand, typeMotor);
    this.maxSpeed = maxSpeed;
    this.coast = coast;
  }
  carInfo() {
    return `This is ${this.brand}. It has ${this.typeMotor} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.coast}.`;
  }
}
const transport = new Car("avto", "gasoline");
console.log(transport.carInfo());
const dodgeViperSRT = new SportCar("Dodge Viper SRT", "gasoline 8.4l", "330 km/h", "118000$");
console.log(dodgeViperSRT.carInfo());
const bentley = new LuxuryCar("Bentley Continental GT", "gasoline 6l", "318 km/h", "550000$");
console.log(bentley.carInfo());

import { CarItaly } from "./car";
class newCar extends CarItaly {
  constructor(
    protected model: string,
    protected country: string,
    protected wheels: number,
    protected maxSpeed: string,
  ) {
    super(model, country, wheels, maxSpeed);
  }
}

function whatItaly(country: string) {
  if (country !== "Italy") {
    throw new Error("this is not an Italian car");
  } else {
    console.log("this is an Italian car");
  }
}

const alfaRomeo = new newCar("alfaRomeo", "Italy", 4, "360 km/h");
console.log(alfaRomeo);
whatItaly("Italy");

import { CarItaly } from "./car";

const lancia = new CarItaly("lancia", "Italy", 4, "290 km/h");
console.log(lancia);
function whatItaly(country: string) {
  if (country !== "Italy") {
    throw new Error("this is not an Italian car");
  } else {
    console.log("this is an Italian car");
  }
}
whatItaly("Italy");

import { CarItaly } from "./car";

const dacia = new CarItaly("dacia", "Romania", 4, "212 km/h");
console.log(dacia);

function whatItaly(country: string) {
  if (country !== "Italy") {
    throw new Error("this is not an Italian car");
  } else {
    console.log("this is an Italian car");
  }
}
whatItaly("Romania");

import { CarItaly } from "./car";

const alfaRomeo = new CarItaly(" alfaRomeo", "Italy", 4, "360 km/h");
console.log(alfaRomeo);
function whatItaly(country: string) {
  if (country !== "Italy") {
    throw new Error("this is not an Italian car");
  } else {
    console.log("this is an Italian car");
  }
}
whatItaly("Italy");

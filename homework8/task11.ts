const obj: { name: string; surname: string; age: string } = {
    name: "Petr",
    surname: "Petrov",
    age: "20 years",
  },
  { name = "Anonom", surname = "Anonomich", age = "? ages" } = obj;
console.log("name:", `${name}`, "surname:", `${surname}`, "age:", `${age}`);

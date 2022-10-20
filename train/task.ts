//console.log("Hello");
//setTimeout(() => {
//console.log("call async method");
//}, 3000);
//console.log("Good bye");
//function seyHi(name: string) {
//console.log(`good morning ${name}`);
//}
//function greeting(name: string, cb: (name: string) => void) {
//cb(name);
//}
//greeting("Yury", seyHi);

console.log("processor starting ...");
const p = new Promise((resolve, reject) => {
  console.log("loading...");
  setTimeout(() => {
    const obj: { status: number; message: string; isModified: boolean } = {
      status: 200,
      message: "ok",
      isModified: false,
    };
    resolve(obj);
    //console.log(obj);
  }, 2000);
});
p.then((myObj: any) => {
  console.log(myObj);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      myObj.isModified = true;
      resolve(myObj);
    }, 3000);
  });
})
  .then((myNewObj: any) => console.log(myNewObj))
  .finally(() => console.log("the end"));

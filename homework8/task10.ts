function elements(p1: string, p2: string, p3: string, ...pRest: string[]) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(pRest);
}
elements("elem1", "bbb", "eee");

console.log(`==============================`);
const arr: string[] = ["elem1", "elem2"];
const elem2 = "";
const elem3 = "";
const res = () => {
  elem2 = arr[1];
  elem3 = arr[2];
  if (arr[1] === undefined) {
    elem2 = "eee";
  }
  if (arr[2] === undefined) {
    elem3 = "bbb";
  }
};
res();
console.log(elem2);
console.log(elem3);

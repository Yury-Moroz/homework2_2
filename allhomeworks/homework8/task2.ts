const users: string[] = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
const add = "member";
const res = users.map((name: string, index: number) => {
  return `${add} ${index + 1} ${name}`;
});
console.log(res);

const res2 = users.map(function (name2: string, index2: number) {
  return `${add} ${index2 + 1} ${name2}`;
});
console.log(res2);

// У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.
//
//     Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒
// Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3.
// А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошиconst
// const arr: string[] = ["pytin xer", "pytin xer", "pytin xer", "pytin xer", "pytin xer", "pytin xer", "pytin xer"];
// arr.reduce((xer: string, value: string) => {
//   console.log(`${xer}`);
//   xer += value;
//   return xer;
// }, "");

// const arr: string[] = ["pytin xer", "pytin xer", "pytin xer", "pytin xer", "pytin xer", "pytin xer", "pytin xer"];
// const arr2: string[] = Object.assign([], arr);
// console.log(arr);
// console.log(arr2);

import fetch from "node-fetch";
const URL = "https://jsonplaceholder.typicode.com/comments?postId=2";
async function getResponse() {
  const response = await fetch(URL);
  return await response.json();
}
getResponse().then((result) => console.log(result));

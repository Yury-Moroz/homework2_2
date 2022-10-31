import fetch from "node-fetch";

const URL = "https://jsonplaceholder.typicode.com/todos";
// async function getTodos() {
//   const response = await fetch(URL);
//   return await response.json();
// }
// getTodos().then((result) => console.log(result));

async function printTodos() {
  const response = await fetch(URL);
  const todosPrint: any = await response.json();
  return todosPrint.map((index: any) => {
    return { id: index.id, title: index.title };
  });
}
printTodos().then((result) => console.log(result));

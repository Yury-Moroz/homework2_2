import fetch from "node-fetch";
const URL = "https://jsonplaceholder.typicode.com/comments?postId=2";

async function getResponse() {
  const response = await fetch(URL);
  return await response.json();
}
getResponse().then((result) => console.log(result));

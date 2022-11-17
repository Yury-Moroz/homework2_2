import fetch from "node-fetch";
async function post15() {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts?id=15");
  return await post.json();
}
async function post23() {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts?id=23");
  return await post.json();
}
async function post7() {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts?id=7");
  return await post.json();
}
async function post3() {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts?id=3");
  return await post.json();
}
async function getPosts() {
  const a = await post15();
  console.log(a);
  const b = await post23();
  console.log(b);
  const c = await post7();
  console.log(c);
  const d = await post3();
  console.log(d);
}
getPosts();

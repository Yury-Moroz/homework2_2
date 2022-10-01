function fooBoo(a: boolean, foo: any, boo: any) {
  if (a) {
    console.log(foo);
  } else {
    console.log(boo);
  }
}
function foo() {
  console.log("foo");
}
function boo() {
  console.log("boo");
}
fooBoo(false, foo, boo);

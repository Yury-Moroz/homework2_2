function trimString(a: string, от: number, до: number) {
  return a.slice(от, до);
}
console.log(trimString("Hello World", 1, 5));

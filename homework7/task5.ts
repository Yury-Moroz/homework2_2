const cats: string[] = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

const cats2: string[] = ["Gachito", "Tom", "Batman"];
for (const item of cats2) {
  console.log(`item = ${item}`);
}

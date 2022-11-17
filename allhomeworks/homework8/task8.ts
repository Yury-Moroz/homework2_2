const map = new Map<string, number>([
  ["cucumbers", 300],
  ["tomatoes", 200],
  ["salt", 10],
  ["sour cream", 110],
]);
function olive(Map: string) {
  for (const [key, index] of Map) {
    if (index > 100) {
      console.log(key);
    }
  }
}
olive(map);
console.log(`=================`);

const olive2 = (Map: string) => {
  for (const [key, index] of Map) {
    if (index > 100) {
      console.log(key);
    }
  }
};
olive2(map);

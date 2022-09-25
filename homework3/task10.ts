const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;
const shouldGoToWork = "you can go to work";
const shouldGoToWork2 = "you can't go to work";
if (key && documents && pen) {
  if (apple || orange) {
    console.log(shouldGoToWork);
  } else {
    console.log(shouldGoToWork2);
  }
}

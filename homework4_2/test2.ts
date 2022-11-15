class Calculater {
  constructor() {}
  sum2(a: number, b: number) {
    return a + b;
  }
  sub2(a: number, b: number) {
    return a - b;
  }
  dev2(a: number, b: number) {
    return a / b;
  }
  mult2(a: number, b: number) {
    return a * b;
  }
  els2(a: number, b: number) {
    return a > b;
  }
  proc2(a: number, b: number) {
    return a % b;
  }
}

const getCalculater = new Calculater();

function mysumm() {
  if (getCalculater.sum2(5, 6) === 11) {
    console.log("ok");
  } else {
    console.log("ne ok");
  }
}
mysumm();

function mysubb() {
  if (getCalculater.sub2(5, 6) === -1) {
    console.log("ok");
  } else {
    console.log("ne ok");
  }
}
mysubb();

function mydevv() {
  if (getCalculater.dev2(5, 6) === 11) {
    console.log("ok");
  } else {
    console.log("ne ok");
  }
}
mydevv();

function mymultt() {
  if (getCalculater.mult2(5, 6) === 30) {
    console.log("ok");
  } else {
    console.log("ne ok");
  }
}
mymultt();

function myelss() {
  if (getCalculater.els2(5, 6) === true) {
    console.log("ok");
  } else {
    console.log("ne ok");
  }
}
myelss();

function myprocc() {
  if (getCalculater.proc2(5, 6) === 11) {
    console.log("ok");
  } else {
    console.log("ne ok");
  }
}
myprocc();

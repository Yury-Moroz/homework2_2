const myDate: Date = new Date();
const month = myDate.getMonth();
const year = myDate.getFullYear();
const day = myDate.getDay();
const myLokalTime: Date = new Date();
const nowDate = month + "." + year + "." + day;
console.log(nowDate + " " + myLokalTime.toLocaleTimeString());

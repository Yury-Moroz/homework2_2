const myDate: Date = new Date();
const month = myDate.getMonth();
const year = myDate.getFullYear();
const day = myDate.getDate();
const myLocalTime: Date = new Date();
const nowDate = month + "." + year + "." + day;
console.log("текущая дата: " + nowDate + " " + "текущее время: " + myLocalTime.toLocaleTimeString());

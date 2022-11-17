const login = "Moroz-Yury";
const password = "221089Moroz";
const validator: any = {
  login: "",
  password: "",
};
validator.login = login;
validator.password = password;
const dataObj: any = {
  obj: function (login: string, password: string) {
    if (validator.login === login && validator.password === password) {
      return "**Добро пожалоВать**";
    } //можно еще else написать, но мне кажется это не обязательно, undefined тоже нормально
  },
};
console.log(dataObj.obj("Moroz-Yury", "221089Moroz"));

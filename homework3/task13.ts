const south = "юг";
const north = "север";
const west = "восток";
const east = "запад";
let chose = "";
chose = west;
switch (chose) {
  case south:
    console.log("на юг пойдешь счастье найдешь");
    break;
  case north:
    console.log("на север пойдешь много денег найдешь");
    break;
  case west:
    console.log("на запад пойдешь верного друга найдешь");
    break;
  case east:
    console.log("на восток пойдешь разработчиком станешь");
    break;
  default:
    console.log("попробуйте еще раз");
}

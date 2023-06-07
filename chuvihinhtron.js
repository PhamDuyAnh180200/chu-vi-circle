let inputDuongkinh;
let inputBankinh;
const PI = 3.14159;
inputBankinh = prompt("Nhập bán kính");
inputDuongkinh = prompt("Nhập đường kính");
let Bankinh = parseInt(inputBankinh);
let Duongkinh = parseInt(inputDuongkinh);
let Diameter1 = Duongkinh * PI ;
let Diameter2 = Bankinh * 2 * PI ;
document.write("Chu vi hình tròn theo cách 1 là: " +Diameter1);
document.write('<br/>');
document.write("Chu vi hình tròn theo cách 2 là: " +Diameter2);


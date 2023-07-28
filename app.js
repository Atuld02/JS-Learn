// function c() {
//   setTimeout(() => {
//     printData();
//   }, 3000);
// }
// function printData() {
//   console.log(document.getElementById("numData").value);
// }

//c();
const input = document.querySelector("input");

const ipnum = document.getElementById("inputnum");
function printdiv(e) {
  //ipnum.textContent.toString(document.getElementById("numData").value);
  //console.log(document.getElementById("numData").value);
  //   ipnum += data;
  //console.log(e.key);
  ipnum.textContent += e.key;
}

input.addEventListener("keyup", printdiv);

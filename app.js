function c() {
  setTimeout(() => {
    printData();
  }, 3000);
}
function printData() {
  console.log(document.getElementById("numData").value);
}

//c();

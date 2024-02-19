
 

const printData=() =>{
	console.log(document.getElementById("num").value);
}


const debounce = function (fn, d) {
	let timer;
	return function () {
	  clearTimeout(timer);
	  timer = setTimeout(() => {
		printData()
	  }, d);
	}
  }

const do_Delay=debounce(printData,700)
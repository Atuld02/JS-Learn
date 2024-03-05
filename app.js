function Print() {
  let s = "";
  let x = document.querySelector("#num");
  var ans = Number(x.value);
  let res = 1;
  let timer = 0;
  let a = "";
  //console.log(ans)
  if (ans <= 0) {
    s += "Cube of Less than or 0 not possible";
    let curr = document.querySelector("#dis");
    curr.textContent = s;
    return;
  }
   A(ans);
//   if (localStorage.getItem(ans)) {
//       a=let outString = `cube(${ans}) = ${localStorage.getItem(ans)} (cached)`;
    // console.log("true exists");
//   } else {
//     // calulcate_cached();
// 	A(ans);
//     timer = 1;
//     // console.log("false not exists");
//   }

//   function calulcate_cached() {
//     //let i=0
//     for (let i = 0; i < ans; i++) {
//       if (localStorage.getItem(i + 1)) {
//         a = localStorage.getItem("1+" + (i + 1));
//         console.log(i);
//         console.log(a);
//       } else {
//         res = (i + 1) * (i + 1) * (i + 1);
//         localStorage.setItem(i + 1, res);
//         s += "cube(";
//         s += i + 1;
//         s += ") = ";
//         s += localStorage.getItem(i + 1);
//         s += " (new)";
//         localStorage.setItem("1+" + (i + 1), s);
//         a = localStorage.getItem("1+" + (i + 1));
//         a += "(cached)";
//         //res=1;
//         s = "";
//       }
//       // console.log(typeof(a))
//     }
//   }

function A(ans) {
	let res = 0;
	for (let i = 1; i <= ans; i++) {
		let outString = `cube(${i}) = `;
		let cachedVal = localStorage.getItem(i)
		if (cachedVal) {
			outString += `${cachedVal} (cached)`;
		} else {
			let cube = (i * i * i);
			outString += `${cube} (new)`;
			localStorage.setItem(i, cube);
		}

		//console.log(outString)
		s+=outString
	}
}


  let curr = document.querySelector("#dis");
  curr.textContent = s;
}

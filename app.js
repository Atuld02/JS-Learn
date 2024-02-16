

//console.log(x)

function Print(){
	let s=""
	let x=document.querySelector("#num")
	if(localStorage.getItem(x.value))
	{ var ans=Number(x.value)
		if(ans==0)
			return
		else{
			s+="<li>"
			s+="\n"
			s+="factorial("
			s+=(x.value)
			s+=") = "
			var res=factorial(x.value)
			//s+=((x.value)*(x.value)*(x.value))
			s+=res
			s+=" (cached)</li>"
			s+="\n"
			}
		}
	else{
		var ans=Number(x.value)
		if(ans==0)
			return
		else{
			s+="<li>"
			s+="\n"
			s+="factorial("
			s+=(x.value)
			s+=") = "
			var res=factorial(x.value)
			//s+=((x.value)*(x.value)*(x.value))
			s+=res
			s+=" (new)</li>"
			s+="\n"
			}
		
		localStorage.setItem(x.value,1)
	}
	function factorial(n) { 
		if (n == 0) return 1; 
		return n * factorial(n - 1); 
	  } 
	let curr=document.querySelector("#dis")
	curr.textContent=s
}


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
			s+="cube("
			s+=(x.value)
			s+=") = "
			s+=((x.value)*(x.value)*(x.value))
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
			s+="cube("
			s+=(x.value)
			s+=") = "
			s+=((x.value)*(x.value)*(x.value))
			s+=" (new)</li>"
			s+="\n"
			}
		
		localStorage.setItem(x.value,1)
	}

	let curr=document.querySelector("#dis")
	curr.textContent=s
}
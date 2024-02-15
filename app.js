

//console.log(x)

function Print(){
	let s=""
	let x=document.querySelector("#num")
	//console.log(x.value)
	//console.log(x.textContent)
	//if(x.value==0
	var ans=Number(x.value)
	//console.log(ans)
	if(ans==0)
		return
	else{
		for(let i=1;i<=ans;i++){
			//if(i==0){
				s+="<li>"
				s+="\n"
			//}
			s+="cube("
			s+=(i)
			s+=") = "
			s+=((i)*(i)*(i))
			s+="</li>"
			s+="\n"
		}
		//s+="<li>"
		//s+="\n"
	}
	let curr=document.querySelector("#dis")
	curr.textContent=s
}
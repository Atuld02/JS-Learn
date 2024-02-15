

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
		for(let i=0;i<ans;i++){
			if(i==0){
				s+="<ul>"
				s+="\n"
			}
			s+="<li>"
			s+=(i+1)
			s+="</li>"
			s+="\n"
		}
		s+="</ul>"
		s+="\n"
	}
	let curr=document.querySelector("#dis")
	curr.textContent=s
}
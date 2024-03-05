function Print(){
	let s=""
	let x=document.querySelector("#num")
	var ans=Number(x.value)
	//console.log(ans)
	if(ans<=0){
	s+="Entered number is less than 0"
	let curr=document.querySelector("#dis")
	curr.textContent=s
	return 
	}
	s+="<ul>"
	s+="\n"
	for(let i=0;i<ans;i++){
			s+="<li>"
			s+=(i+1)
			s+="</li>"
			s+="\n"
		}
		s+="</ul>"
		s+="\n"
	let curr=document.querySelector("#dis")
	curr.textContent=s
}
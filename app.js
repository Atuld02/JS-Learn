function Print(){
	let s=""
	let x=document.querySelector("#num")
	var ans=Number(x.value)
	let res=1
    let timer=0
	let a=""
	//console.log(ans)
	if(ans<=0){
	s+="Cube of Less than or 0 not possible"
	let curr=document.querySelector("#dis")
	curr.textContent=s
	return
	}
     
    if((localStorage.getItem(ans)))
	 { timer=0
		// console.log("true")
	 }
    else{ 
		calulcate_cached()
		timer=1
		// console.log("false")
	  }

function calulcate_cached(){
res=ans*ans*ans
localStorage.setItem(ans,res)
s+="<li>"
s+="\n"
s+="cube("
s+=(x.value)
s+=") = "
s+=localStorage.getItem(ans)
localStorage.setItem(("1+"+x.value),s)
a=localStorage.getItem(("1+"+x.value))
// console.log(typeof(a))
}

if(timer==1){
	
a+=" (new)</li>"
}
else{

a=localStorage.getItem(("1+"+x.value))
a+= "(cached)</li>"
}

a+="\n"
let curr=document.querySelector("#dis")
curr.textContent=a
	

}











	
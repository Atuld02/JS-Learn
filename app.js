// Handled arrow keys wala thing nd innerHTML
// Printing till existing value as cached,
// if new value then calculating 
// removed unused variables and tags
// Enhancements -> using objects how to do??
// Enhancements -> how to store string, instaed of building everytime??
function Print(event){
	const isNumber = /^[0-9]$/i.test(event.key)
	if(isNumber==false)
	return
	let s=""
	let x=document.querySelector("#num")
	var ans=Number(x.value)
	if(ans<=0){
	document.getElementById("dis").innerHTML = "Cube of Less than or 0 not possible"
	return
	}

	for(let i=0;i<ans;i++){
		if(!localStorage.getItem(i+1))
		 cubeNew(i+1)
		else
		 cubeCache(i+1)
		
	}
	function cubeNew(res){
		localStorage.setItem(res,(res*res*res))
		s+="cube("
		s+=(res)
		s+=")="
		s+=localStorage.getItem(res)+"(new)"
	}
	function cubeCache(res){
		s+="cube("
		s+=(res)
		s+=")="
		s+=localStorage.getItem(res)+"(cached)"
	}
document.getElementById("dis").innerHTML =s
	
}
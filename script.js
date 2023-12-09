//your JS code here. If required.

const squareCon = document.getElementsByClassName("square");
let arr = Array.from(squareCon);
console.log(arr)
arr.forEach((box)=>{
	box.addEventListener("mouseenter", (e)=>setChanges(e))
	box.addEventListener("mouseleave", restoreChanges)
})



function setChanges(e){

	const id = e.target.id; // id of element that triggerd the event
	
	arr.forEach((box)=>{
		if(box.id === id){
			box.style.backgroundColor = "rgb(230,230,250)" ;
		}
		else{
			box.style.backgroundColor = "rgb(111,78,55)";
		}
	});
}

function restoreChanges(){
	arr.forEach((box)=> box.style.backgroundColor = "rgb(230,230,250)")
}
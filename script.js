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
			box.style.backgroundColor = "#E6E6FA" ;
		}
		else{
			box.style.backgroundColor = "#6F4E37";
		}
	});
}

function restoreChanges(){
	arr.forEach((box)=> box.style.backgroundColor = "#E6E6FA")
}
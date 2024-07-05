function volume_sphere() {
    //Write your code here
	let rad=document.querySelector("#radius");
	let vol=document.querySelector("#volume");
	let form=document.querySelector("form");
	form.addEventListener("submit",(e)=>{
		e.preventDefault();
		let radValue=rad.value;
		let flag=false;
		for(let val=0;val<radValue.length;val++){
			let ascii= radValue.charCodeAt(val);
			if(ascii>=48 && ascii <=57){
				flag=true;
				continue;
			}
			else{
				flag=false;
				break;
			}
			
		}
		if(flag==true){
			let volume=(4/3)*Math.PI*radValue**3;
			// volume=volume.tofixed(4);
			volume=Math.round(volume*10000)/10000
			vol.value=volume
		}
		else{
			vol.value="NaN"
		}
	})
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

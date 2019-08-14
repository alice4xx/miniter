
let test = document.getElementById("push");

function changeBttnColor(e) {
  console.log(e.target)
 
   if(e.target.value.length > 0){
    test.style.backgroundColor= "#84C3FA";
   }
}
document.getElementById("passwordd").addEventListener('keyup', changeBttnColor);





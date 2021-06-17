console.log("ai hello world from javascript");
//alert("Don't Quit! please");
let a = 0
document.getElementById("txt").innerHTML = "Changed from JAVASCRIPT file!!";

function appendValue(a){  
  document.getElementById("txt").innerHTML="function call done! "+a

}
function myf(){
  a = a + 1;
  appendValue(a);
  console.log(a);
}

function foo(){
  let val = document.getElementById("holder").value;
  let intVal = parseInt(val,10);
  a = a + intVal;
  appendValue(a);
  console.log(val);
}
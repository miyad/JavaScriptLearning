console.log("ai hello world from javascript");
//alert("Don't Quit! please");
let a = 0
document.getElementById("txt").innerHTML = "Changed from JAVASCRIPT file!!";
function myf(){
  document.getElementById("txt").innerHTML="function call done!"+a;
  a = a + 1;
}

console.log(a)
//document.getElementById("b").style.color = 'red';
//document.getElementById("b").click.call=myf();
document.getElementById("button1").click.call = myf();
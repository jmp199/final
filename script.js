function myFunction() {
  
  var a = document.getElementById("myName").value;

  if (a == "FinalUsername") {
    var w = 1;
  } else {
    alert("Incorrect Username");
  }


var b = document.getElementById("myPassword").value;

if (b == "finalPassword") {
  var x = 1;
} else {
  alert("Incorrect Password");
}
  var c = document.getElementById("myConf").value;

if (c == b) {
  var y = 1;
} else {
  alert("Password does not match");
}
 var d = Number(document.getElementById("myAge").value);
  var e= document.getElementById("myAge").value;

if (d>17) {
  var z = 1;
}  else if (isNaN){
  alert("Must be a number");
}
    else {
      alert("You are not old enough to visit this site");
}   
  
var array = [w,x,y,z]

function checktrue(dog) {
  if (dog >0){
    return alert("Submitted Correctly!");
    
  }
}

  document.getElementById("demo5").innerHTML = array.every(checktrue);

  
// function checktrue(el,index,arr) {
 
//   if (index === 0){
    
//     return true;
//   }
//   else {
//     // return false;
//     // return (el.array === arr[index - 1].array);
//     return (array=== arr[index - 1].array);
//   }
// }
//   document.getElementById("demo5").innerHTML=array.every(checktrue);
// // function checktrue(dog){
// //   if (dog==true){
// //      alert("Submitted Correctly!");
// //   }

// // }
// //  array.every(checktrue);
  
  

}
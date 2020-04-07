//ejemplo 1
// setInterval(function () {
//   console.log("hola");
// }, 1000);

//ejemplo 2

let i = 0
let intervalo=setInterval(function () {
    if(i===3){
        clearInterval(intervalo)
    }
    i++
    console.log("hola");
  }, 1000);
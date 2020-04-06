//Default Params y Concatenación

//Antes
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

newFunction();

//es6
function newFunction2(name = "manuel", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction2(this.eval, 27);

let hello = "Hello";
let world = "World";

//antes
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//es6
let epicPhrase2=`${hello} ${world}`;
console.log(epicPhrase2)
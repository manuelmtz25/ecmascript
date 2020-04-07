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

//Multilínea

//antes
let lorem='Dolore reprehenderit id aute officia mollit qui id dolore velit.\n'
        + 'Amet esse nisi in exercitation sint nulla labore aliquip in elit duis labore labore.'
console.log(lorem)

//es6
let lorem2=`Veniam id dolore et pariatur laborum velit do.
Quis enim sunt officia excepteur nisi et laborum cupidatat aute.
Velit adipisicing in amet aliqua minim do officia veniam Lorem fugiat sit do cupidatat amet.`
console.log(lorem2)

//Desestructuración de elementos

let person={
    'name':'oscar',
    'age':32,
    'country':'MX'
}

//antes
console.log(person.name, person.age, person.country)

//es6
let {name, age, country}=person;
console.log(name, age, country)


//Spread Operator

//antes
let arr=[1,2,3]
let arr2=[4,5]
arr=arr.concat(arr2)
console.log(arr)

//es6
let arr=[1,2,3]
let arr2=[4,5]
arr=[...arr,...arr2]
console.log(arr)

//antes
let arr = ['a','b']; 
let arr2 = [arr,'c','d'];   
console.log(arr2); // [ [ 'a', 'b' ], 'c', 'd' ] 

//es6
let arr = ['a','b']; 
let arr2 = [...arr,'c','d'];   
console.log(arr2); // [ 'a', 'b', 'c', 'd' ] 

//antes
let arr = [1,2,3,-1]; 
console.log(Math.min(arr)); //NaN 

//es6
let arr = [1,2,3,-1];  
console.log(Math.min(...arr)); //-1 

//es6
let team1=['Oscar','Julian','Ricardo']
let team2=['Valeria','Jessica','Camila']

let education=['Manuel', ...team1, ...team2]
console.log(education)

//es6
//uso de LET y CONST

{
    //global scope
    var globalVar='Global'
}

{
    //scope of a block
    let localVar='Local'
    console.log(localVar)
}

console.log(globalVar)

const a='b';
a='c' //no lo va a permitir
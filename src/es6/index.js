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
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multilínea

//antes
let lorem =
  "Dolore reprehenderit id aute officia mollit qui id dolore velit.\n" +
  "Amet esse nisi in exercitation sint nulla labore aliquip in elit duis labore labore.";
console.log(lorem);

//es6
let lorem2 = `Veniam id dolore et pariatur laborum velit do.
Quis enim sunt officia excepteur nisi et laborum cupidatat aute.
Velit adipisicing in amet aliqua minim do officia veniam Lorem fugiat sit do cupidatat amet.`;
console.log(lorem2);

//Desestructuración de elementos

let person = {
  name: "oscar",
  age: 32,
  country: "MX",
};

//antes
console.log(person.name, person.age, person.country);

//es6
let { name, age, country } = person;
console.log(name, age, country);

//Spread Operator

//antes
let arr = [1, 2, 3];
let arr2 = [4, 5];
arr = arr.concat(arr2);
console.log(arr);

//es6
let arr = [1, 2, 3];
let arr2 = [4, 5];
arr = [...arr, ...arr2];
console.log(arr);

//antes
let arr = ["a", "b"];
let arr2 = [arr, "c", "d"];
console.log(arr2); // [ [ 'a', 'b' ], 'c', 'd' ]

//es6
let arr = ["a", "b"];
let arr2 = [...arr, "c", "d"];
console.log(arr2); // [ 'a', 'b', 'c', 'd' ]

//antes
let arr = [1, 2, 3, -1];
console.log(Math.min(arr)); //NaN

//es6
let arr = [1, 2, 3, -1];
console.log(Math.min(...arr)); //-1

//es6
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Jessica", "Camila"];

let education = ["Manuel", ...team1, ...team2];
console.log(education);

//es6
//uso de LET y CONST

{
  //global scope
  var globalVar = "Global";
}

{
  //scope of a block
  let localVar = "Local";
  console.log(localVar);
}

console.log(globalVar);

const a = "b";
a = "c"; //no lo va a permitir

//Parámetros en objetos
let name = "manuel";
let age = 32;

//antes
obj = { name: name, age: age };
console.log(obj);
//es6
obj2 = { name, age };
console.log(obj2);

//Arrow functions (Sintaxix más reducida y this no vinculable)

const names = [
  { name: "Manuel", age: 32 },
  { name: "Rosy", age: 28 },
];

//antes
let listOfNames = names.map(function (item) {
  console.log(item.name);
});

//es6
let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age) => {
  //Código de la función
};

const listOfNames4 = name => {
  //Código de la función con un solo parámetro
};

const square = num => num * num;
console.log(square(5))

//Promesas

const helloPromise=()=>{
  return new Promise((resolve, reject)=>{
    //Código: algo va a pasar...
    if(true){
      resolve('Todo bien')
    }else{
      reject('Algo salió mal')
    }
  });
}

//a una promesa le podemos agregar una gran cantidad de
//elementos "then" en caso de que se quiera continuar haciendo algo
helloPromise()
  .then(response=>console.log(response))
  .then(()=>console.log('hola'))
  .catch(error=>console.log(error))

//Clases
class calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }

  sum(valueA, valueB){
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2))

//Módulos
import {hello} from './module';

hello();

//Generadores
//función especial que retorna una serie de valores

function* helloWorld(){
  if(true){
    yield 'Hello, ';
  }
  if(true){
    yield 'World';
  }
}

const generatorHello=helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
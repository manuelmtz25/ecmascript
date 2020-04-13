//operador de reposo: puede extraer las propiedades de un objeto que aún no se ha construido
const obj = {
  name: "Manuel",
  age: 32,
  country: "MX",
};

// let {name, ...all}=obj;
// console.log(name, all)
//Manuel { age: 32, country: 'MX' }

let { country, ...all } = obj;
console.log(all);
//{ name: 'Manuel', age: 32 }

//propiedades de propagación para unir dos o más elementos
const obj = {
  name: "Manuel",
  age: 32,
};

const obj1 = {
  ...obj,
  countr: "MX",
};

console.log(obj1);

//finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true 
        ? resolve("Hello World") 
        : reject(new Error("Test error"))
  });
};

helloWorld()
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log('Finalizo...'))


//mostrar los elementos de un regex
const regexData=/([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match=regexData.exec('2018-04-20');
const year=match[1]
const month=match[2]
const day=match[3]

console.log(year, month, day)
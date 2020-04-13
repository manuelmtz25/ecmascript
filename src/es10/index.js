//flat y flatMap
let array=[1,2,3, [1,2,3, [1,2,3]]]
console.log(array.flat(2))

let array=[1,2,3,4,5]
console.log(array.flatMap(value=>[value, value*2]))

//trimStart y trimEnd
let hello ='     hello world'
console.log(hello)
console.log(hello.trimStart())

let hello='hello world     '
console.log(hello)
console.log(hello.trimEnd())


//antes
try{

}catch(error){
    error
}

//es10: no es necesario pasar el parámetro de error. Automáticamente ya estará disponible dentro del bloque de código del catch
try{

}catch{
    error
}

//fromEntries
let entries=[["name", "Manuel"], ["age", 32]];
console.log(Object.fromEntries(entries))

//mySymbol description
let mySymbol='My Symbol'
let symbol=Symbol(mySymbol);
console.log(symbol.description)
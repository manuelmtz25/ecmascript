//Object.entries()
//devolver la clave y los valores a una matriz

const data={
    frontend:'Manuel',
    backend:'Gustavo',
    design:'Rosy'
}

const entries=Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object.values()
//devuelve los valores de un objeto a un arreglo       
const data={
    frontend:'Manuel',
    backend:'Gustavo',
    design:'Rosy'
}

const values=Object.values(data)
console.log(values)
console.log(values.length)

//String padding
//Por ejemplo, sirve para en el front pasar los datos listos para impresión de tickets(presentar una estructura de elementos)
const string ='hello';
console.log(string.padStart(8,'12345'))
console.log(string.padStart(3,'12345'))
console.log(string.padEnd(3,'12345'))
console.log(string.padEnd(10,'12345'))
console.log(string.padEnd(14,'12345'))

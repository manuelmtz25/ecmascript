// function soyAsincrona(callback){    
//     setTimeout(function(){
//         console.log('Estoy siendo asíncrona')
//         callback();
//     }, 1000);    
// }

// console.log('Iniciando proceso...')
// soyAsincrona(function(){
//     console.log('Terminando proceso...')
// });

function hola(nombre, miCallback){    
    setTimeout(function(){
        console.log('Hola, '+ nombre)
        miCallback(nombre);
    }, 1500);    
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios', nombre);
        otroCallback();
    }, 1000)
}

//Función asíncrona
console.log('Iniciando proceso...')
hola('Manuel', function(nombre){
    adios(nombre, function(){
        console.log('Terminando proceso...')
    });    
});

//De esta manera las funciones correrían en tiempos distintos
// hola('Manuel', function(){})
// adios('Manuel', function(){})
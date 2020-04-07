function hola(nombre){  
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, '+ nombre)
            resolve(nombre);
        }, 1500); 
    });
       
}

function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Bla bla bla...')
            resolve(nombre);
        },1000)
    })
}

function adios(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve(nombre);
            //reject('hay un error')
        }, 1000)
    })
    
}

console.log('Iniciando el proceso');
hola('Manuel')
    .then(hablar)
    .then(hablar)    
    .then(hablar)
    .then(adios)
    .then(function(nombre){
        console.log('Terminado el proceso');
    })
    .catch(function(error){
        console.error('Ha ocurrido un error')
        console.error(error)
    })

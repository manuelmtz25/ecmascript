function seRompe(){
    return 3 + z
}

//debido a que es un hilo diferente por esr asíncrona entonces hay que poner un try/catch local ya que 
//al no pertenecer al hilo principal, entonces no capturará el error
function seRompeAsincrona(){
    setTimeout(() => {
        try{
            return 3 + z
        }catch(err){
            console.log('Error en mi función asíncrona')            
        }
        
    }, 1000);
}

function seRompeAsincronaCallback(){
    setTimeout(() => {
        try{
            return 3 + z
        }catch(err){
            console.log('Error en mi función asíncrona')            
        }
        
    }, 1000);
}

function seRompeAsincronaCallback(cb){
    setTimeout(() => {
        try{
            return 3 + z
        }catch(err){
            console.log('Error en mi función asíncrona')            
            cb()
        }
        
    }, 1000);
}

try{
    //seRompe()
    //seRompeAsincrona()
    seRompeAsincronaCallback(function(){
        console.log('Hay error')
    })
}catch(err){
    console.error('Algo salió mal')    
}

console.log('Esto se ejecuta al final')
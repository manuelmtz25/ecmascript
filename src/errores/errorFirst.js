//Error First Callback es un patrón que lo podemos utilizar cuando utilicemos funciones asíncronas y callbacks

function asincrona(callback){
    //Código...
    setTimeout(function(){
        try{
            let a = 3 + z
            callback(null, a)
        }catch(e){
            callback(e)
        }
    }, 1000)
}

asincrona(function(err, dato){
    if(err){
        console.log('Tenemos un error')        
        return false;        
        
        //throw(err) -> NO VA A FUNCIONAR POR QUE ESTAMOS DENTRO DE UNA FUNCIÓN ASÍNCRONA
    }

    console.log('todo ok', dato)
})
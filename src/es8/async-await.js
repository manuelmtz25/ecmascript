const helloWorld=()=>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=>resolve('Hello World'), 3000)
            : reject(new Error('Error MMA'))        
    })
};

const helloAsync = async () => {
    console.log("Inicio...") 
    const hello = await helloWorld();
    console.log(hello);
    const hello2 = await helloWorld();
    console.log(hello2);
    console.log("Fin...") 
}

helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);

    }catch(error){
        console.log(error)
    }
}

anotherFunction();
const helloPromise = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('good result')
        }else{
            reject('bad result')
        }
    })
};


helloPromise()
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
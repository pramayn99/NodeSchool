const promise = new Promise((resolve,reject)=>{
    resolve('I FIRED')
    reject(new Error('I DID  NOT FIRE'))
})

promise.then((res)=>{
    console.log(res)
},(err)=>{
    console.log(err.message)
})

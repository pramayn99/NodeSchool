
const promiseTest = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("FULFILLED!")
    },300)
})

promiseTest.then((res)=>{
    console.log(res)
})
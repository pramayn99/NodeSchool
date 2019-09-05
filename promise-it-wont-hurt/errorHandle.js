const parsePromised = () => {

    return new Promise((resolve,reject)=>{
        try {
            resolve(JSON.parse(process.argv[2]))
        } catch (error) {
            reject(error)
        }
    })
   
}
parsePromised().then(null,(error)=>{
    console.log(error.message)
})
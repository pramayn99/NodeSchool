const all = (promise1,promise2) => {

    return new Promise((resolve,reject)=>{
        let counter = 0
        let out = []

        promise1
        .then(p1=>{
            out[0]= p1
            counter = counter+1
            if(counter==2)
                resolve(out)
        })

        promise2
        .then(p2=>{
            out[1]= p2
            counter = counter+1
            if(counter==2)
                resolve(out)
        })

    })
}

all(getPromise1(),getPromise2()).then(console.log)
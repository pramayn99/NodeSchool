const rm = require('./readModule')

rm(process.argv[2],process.argv[3], (err,list) => {
    if(err)
        return console.error(err)
    list.forEach(element => {
        console.log(element)
    });
})
function duckCount(...args)
{
    console.log(args)
    let quackArray = args.filter((obj)=>{
        if(!Object.getPrototypeOf(obj))
        {
            console.log("AYE0",obj.prototype)
            return Object.prototype.hasOwnProperty.call(obj, 'quack')
        }
        else{
            if(Object.getPrototypeOf(obj) == Object.prototype)
            {
                console.log("CHECK1",obj)
               return obj.hasOwnProperty('quack')
            }
            else{
                console.log("CHECK2",obj)
            }
        }
    })

    console.log(quackArray)
}

module.exports = duckCount
function reduce(arr,fn,initial)
{
    return ( function reduceOne(index,value){
        if(index>arr.length-1)
            return value
        return reduceOne(index+1,fn(value,arr[index]))
    })(0,initial)
}

module.exports = reduce


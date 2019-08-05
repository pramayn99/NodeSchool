function repeat( operation, numberofTimes)
{
    operation(numberofTimes)
}

function operation(numberofTimes)
{
    if(numberofTimes==0)
        return
    operation(--numberofTimes)
}

module.exports = repeat
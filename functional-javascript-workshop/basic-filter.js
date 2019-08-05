function getShortMessages(messages)
{
    shortMessages =[]
    messages.filter((messageObject) => {
        if(messageObject.message.length<50)
            shortMessages.push(messageObject.message)
    })
    return shortMessages
}

module.exports = getShortMessages
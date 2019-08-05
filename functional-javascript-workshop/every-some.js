function checkValidUsers(goodUsers)
{
    let isValidUser = (currentItem) => {
        return goodUsers.some( (goodUser)=>{
            return goodUser.id == currentItem.id
        })
    }
   
    return ((submittedUsers) => {
        return submittedUsers.every(isValidUser)
    })
}

module.exports = checkValidUsers
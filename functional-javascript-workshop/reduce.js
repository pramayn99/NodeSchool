function countWords(inputWords)
{
    return inputWords.reduce((allWords,word)=>{
        if(word in allWords)
            allWords[word]+=1;
        else
            allWords[word]=1;
        return allWords
    },{})
}

module.exports = countWords
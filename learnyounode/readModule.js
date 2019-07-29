const fs= require('fs')

module.exports = function (dirName,extensionName,callback)
{
    fs.readdir(dirName,'utf-8',filterFiles)
    function filterFiles(err,fileList)
    {
        if(err)
        {
            return callback(err)
        }
        
        fileList= fileList.filter((file)=> {
            return file.split('.')[1] === extensionName   
        })
        
        callback(null,fileList)
        
    }

}



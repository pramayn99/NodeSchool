const fs= require('fs')

fs.readdir(process.argv[2],'utf-8',filterFiles)

function filterFiles(err,fileList)
{
    if(err)
    {
        return console.error(err)
    }
    let filteredList = fileList.filter((file)=> {
        return file.split('.')[1] === process.argv[3]   
    })
    
    filteredList.forEach(filename => {
        console.log(filename)
    });
}

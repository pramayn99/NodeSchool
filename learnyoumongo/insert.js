const mongo = require('mongodb').MongoClient
const [firstName,lastName] = process.argv.slice(2)


mongo.connect("mongodb://localhost:27017",(err,client)=>{
    if(err) throw err
    let db = client.db("learnyoumongo")
    let docsCollection = db.collection("docs")
    docsCollection
    .insertOne({
        firstName:firstName,
        lastName:lastName
    },(err,data)=>{
        if(err) throw err
        console.log(JSON.stringify({
            firstName:firstName,
            lastName:lastName
        }))
        client.close()
    })
})
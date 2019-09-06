const mongo = require('mongodb').MongoClient
const [dbName,collectionName,id] = process.argv.slice(2)

console.log(process.argv)

mongo.connect("mongodb://localhost:27017",(err,client)=>{
    if(err) throw err
    let db = client.db(dbName)
    let users = db.collection(collectionName)
    users.find({
        age:23
    }.toArray((err,docs)=>{
        if(err) throw err
        console.log(docs)
        client.close()
    })
    )

})
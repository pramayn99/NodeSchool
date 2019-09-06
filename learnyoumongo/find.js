const mongo = require('mongodb').MongoClient
const constraint = parseInt(process.argv[2])

mongo.connect("mongodb://localhost:27017", (err,client)=>{
    if (err) throw err
    var db = client.db('learnyoumongo')
    var parrots = db.collection('parrots')
    parrots.find({
        age:{$gt:constraint}
    }).toArray((err,docs)=>{
        console.log(docs)
    })
    client.close()
})
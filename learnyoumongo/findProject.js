const mongo = require('mongodb').MongoClient
const constraint = parseInt(process.argv[2])

mongo.connect("mongodb://localhost:27017", (err,client)=>{
    if(err) throw err
    let db = client.db('learnyoumongo')   
    let parrots = db.collection('parrots')
    parrots.find({
        age:{$gt:constraint}
    })
    .project({
        name:1,
        age:1,
        _id:0
    }).toArray((err,docs)=>{
        if(err) throw err
        console.log(docs)
    })
    client.close()

})
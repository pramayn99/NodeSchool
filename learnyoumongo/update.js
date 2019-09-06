const mongo = require('mongodb').MongoClient
const dbName = process.argv[2]


mongo.connect("mongodb://localhost:27017",(err,client)=>{
    if(err) throw err
    let db = client.db(dbName)
    let users = db.collection("users")
    users.updateOne({
        username:"tinatime"
    },
    {
        $set:{age:40}
    },(err,data)=>{
        if(err) throw err
        console.log(data)
        client.close()
    })

})
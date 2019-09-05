const http = require('q-io/http')

let idLocal

http
.read('http://localhost:7000')
.then(id=>{
    return http.read('http://localhost:7001/'+id)
}).then( res => {
    console.log(JSON.parse(res))
}).then(null,console.error)
.done()





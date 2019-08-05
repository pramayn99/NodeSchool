const net = require('net')
const dateformat = require('dateformat')

function currentTime(){
	return dateformat(Date.now(),"yyyy-mm-dd HH:MM")
}

const server = net.createServer(function (socket){
	socket.write(currentTime()+"\n")
	socket.end()
})

server.on('error', (err) => {
  throw err;
});

server.listen(Number(process.argv[2]))
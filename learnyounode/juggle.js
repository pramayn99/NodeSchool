const http = require('http')
const urls = process.argv.slice(2)
const bl = require('bl')

let result=[]
let count = 0

const printresults = () => {
	result.forEach((data) => {
		console.log(data)
	})
}

urls.forEach((url,index) => {
	http.get(url,(res)=>{
		res.setEncoding('utf-8')
		res.pipe(bl((err,chunk) => {
			if(err)
				return console.error(err)
			result[index]=chunk.toString()
			count+=1;

			if(count==3)
				printresults()
			
		}))
		
			
	}).on('error', (e) => {
	  console.error(`Got error: ${e.message}`);
	})
})


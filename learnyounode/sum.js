const elements = process.argv.slice(2)
let sum = 0

elements.forEach(element => {
    sum+=Number(element)
});

console.log(sum)
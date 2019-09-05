const attachTitle = (name) => "DR. "+name

const fulfilledPromise = Promise.resolve("MANHATTAN")

fulfilledPromise.then(attachTitle).then(console.log)

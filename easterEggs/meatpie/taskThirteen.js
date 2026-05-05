const inputCollector = require("prompt-sync")();

const address = inputCollector("Where do you live? ")

console.log(`I live in ${address} city.`)

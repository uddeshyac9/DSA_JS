// process.stdout.write("Hello ")
// process.stdout.write("World")

let prompt = require('prompt-sync')();
let n = prompt('Enter a Number : ')
// process.stdout.write("* ")

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write("* ")
    }
    console.log()
}





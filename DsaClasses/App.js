// process.stdout.write("Hello ")
// process.stdout.write("World")

// let prompt = require('prompt-sync')();
// let n = prompt('Enter a Number : ')
// process.stdout.write("* ")

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         process.stdout.write("* ")
//     }
//     console.log()
// }






// let array = [];

// array[0] = Number(prompt('Please enter a value'))
// console.log(array)

// let arr = new Array(5)
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt('please enter a value')) 
// }
// console.log(arr)

// let arr = [10,20,30,40,50] 
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]


// }

// console.log(sum)



let arr = [100,200,300,50,40,399,599,499,599]
let max = Math.max(arr[0],arr[1]);
 let secondMax = Math.min(arr[0],arr[1]);

for (let i=1; i < arr.length; i++) {
     

    if (max < arr[i]) {
    secondMax = max
      max = arr[i]
    } else if (arr[i] > secondMax && arr[i] != max ) {
        secondMax =arr[i]
    }
 
     
  

}

console.log(max)
console.log(secondMax)
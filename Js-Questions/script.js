// let str = "saare jaha se acha hindustan hamaara";
 
//   let reversed = str.split(" ").map((word) => (
//     word.split('').reverse().join('')
//  ))

//  console.log(reversed.join(' '))


function checkArray(elem) {
  return Array.isArray(elem)
}

// const checkArray = (elem) => (
//   Array.isArray(elem)
// )

console.log(checkArray({}))
console.log(checkArray([]))

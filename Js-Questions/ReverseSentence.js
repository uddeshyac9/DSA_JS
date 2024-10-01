let str = "saare jaha se acha hindustan hamaara";
 
  let reversed = str.split(" ").map((word) => (
    word.split('').reverse().join('')
 ))

 console.log(reversed.join(' '))
//Loop Class

//Question 1 

// Print Reverse Number from 200 to 100 

// for(let i = 200; i >= 100; i--) {
//     console.log(i)
// }


// Sum of N Natural Numbers  & Factorial of Number
// 1. Remove Invalid Input 
// 2.Number Should be positive

// let prnum = prompt('Enter The Number');


// if (prnum === null) {
//     console.log('User Canceled The Promp') 
// } else{ 

//   let num =  Number(prnum)
    
//     if (isNaN(num)) {
//         console.log('Invalid Input ')
//     }
//     let Sum = 0;
//     let Fact = 1;
//     if (num > 0) {
       
//     for (let i = 1; i <= num; i++) {
//         Fact = Fact * i;
//         Sum = Sum + i;
//     }
//     } else {
//         console.log('Number Should Be Positve & More Than Zero')
    
//     }

//     if (num > 0) {
//         console.log('Sum of Natural Numbers',Sum)
//         console.log('Factorial of Natural Numbers',Fact)

//     }
    

// }


//Factor of Number 
// let prnum = prompt('Enter The Number');

// if (prnum === null) {
//     console.log("User Cancelled The Prompt")
// } else {
//  let num = Number(prnum)
//  if (isNaN(num)) {
//     console.log("Please Enter A Valid Input") 
//  }  

//  let factArr = [];
//  for (let i = 1; i <= Math.floor(num/2); i++) {
//   if (num % i === 0) {
//     // console.log("Factor is : ", i)
     
//     factArr.push(i)
//   }

 

//  }
//  factArr.push(num)

//  console.log('Factor of Number is  :',factArr.join(","))

// }

//Prime Number 

// let prnum = prompt('Enter The Number');

// if (prnum === null) {
//     console.log("User Cancelled The Prompt")
// } else {
//  let num = Number(prnum)
//  if (isNaN(num)) {
//     console.log("Please Enter A Valid Input") 
//  }  

//  if (num > 0) {
//    console.log(isPrime(num)) 
//  }

// }

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     if (num % 2 === 0 ) return false;
//     for (let i = 3; i <= Math.floor(Math.sqrt(num)); i +=2) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true;


// }



// while loop  start- while(end) {code -change }


// let i = 1;

// while(i <= 20) {
//     //  if(i == 10) continue;
//     console.log(i)
//     i++;
// }


//SumofDigit

// let prnum = prompt('Enter The Number');

// if (prnum === null) {
//     console.log("User Cancelled The Prompt")
// } else {
//  let num = Number(prnum)
//  if (isNaN(num)) {
//     console.log("Please Enter A Valid Input") 
//  }  

//  if (num > 0) {
//    StrongNumber(num)
//  }

// }

// function sumofdigit(num) {

//    let sum = 0;

//    while (num > 0) {
//     let rem =  num%10;

//     sum = sum + rem;

//      num =  Math.floor(num/10);
//    }
//    console.log(sum)
// }


//Reverse Num

// function revNumber(num) {

//    let rev = 0;

//    while(num > 0) {
//       let rem = num%10;
//       rev = rev*10 +rem;
//       num = Math.floor(num/10)
//    }
//    console.log(rev)
// }


//Strong Number
// function StrongNumber (num) {
//    let sum = 0;
//    let copy = num;
//    while (num > 0) {
//       let fact = 1;
//       let rem = num % 10;

//       for(let i = 1; i <=rem; i++) {
//          fact = fact * i
//       }
//       sum = sum + fact;

//       num = Math.floor(num/10)
//    }

//    if (copy === sum) {
//       console.log('Strong Number ')
//    } else {
//       console.log('Is not a Strong Number')
//    }


// }


//do while loop



// let ans = prompt("Enter Exit For Prompt Exit");
// do{
//    ans = prompt("Enter Exit For Prompt Exit");

// }
// while (ans !== null && ans.trim().toLowerCase() !== "exit");

// // Optionally, do something once the user has exited:
// if (ans === null) {
//   console.log("User canceled the prompt.");
// } else {
//   console.log("User entered Exit.");
// }



let random  = Math.floor(Math.random()*100 + 1);


let guess = 0;

while(guess !== random) {
  guess = Number(prompt("Enter Number Between 1 & 100"))

  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Plese Enter Number Between 1 & 100")
    continue
  }
  if (guess > random) {
    console.log("Number is too high")
  } else if ( guess < random ) {
    console.log("Number is too low")
  }
  else {
    console.log('Your Guess is Correct :', guess)
  }

}












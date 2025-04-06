
// Valid Voter Question 
// let age = Number(prompt("What is your Age ?"));

// console.log(age)
// if (isNaN(age)) {
//     console.log('Wrong Input')

// }
// else if (age >= 18) {
// console.log('You are a Valid Voter You Can Proceed to Vote')
// } else {
//     console.log('Your Age is Less Than 18 You Cannot Vote')
// }


// Shop Discount on Different Amount 

let shopamt = Number(prompt('Please Enter Shopping Amount'));

function calculatePercentage(percentage) {
   let percentageAmt =  shopamt * percentage / 100;
   let PaybleAmt = shopamt - percentageAmt;
    console.log('Payable Amount is : ',PaybleAmt)
}
if (isNaN(shopamt)) {
    console.log('Wrong Input')

}
else if (shopamt <= 5000) {
    console.log('Entered Amount is Between 0-5000rs Discount is 0 %')
    console.log('Payble Amount is :', shopamt)
}
else if (shopamt > 5000 && shopamt <= 7000) {
    console.log('Entered Amount is Between 5001-7000rs Discount is 5 %')
    calculatePercentage(5)
    
}
else if (shopamt > 7000 && shopamt <= 9000) {
    console.log('Entered Amount is Between 7001-9000rs Discount is 10 %')
    calculatePercentage(10)
}
else if (shopamt > 9000) {
    console.log('Entered Amount is Greater then 9000rs Discount is 20 %')
    calculatePercentage(20)
}





// Array Push and Pop Basics

// PUSH - adds element(s) to the end of an array
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]

// Push returns the new length of the array
const newLength = fruits.push("grape");
console.log(newLength); // 4

// Push multiple elements at once
fruits.push("mango", "pineapple");
console.log(fruits); // ["apple", "banana", "orange", "grape", "mango", "pineapple"]


// POP - removes the last element from an array
const lastFruit = fruits.pop();
console.log(lastFruit); // "pineapple"
console.log(fruits); // ["apple", "banana", "orange", "grape", "mango"]

// Pop on empty array returns undefined
const emptyArr = [];
const popped = emptyArr.pop();
console.log(popped); // undefined


// COMMON USE CASES
// Stack implementation using push and pop
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3 (LIFO - Last In First Out)
console.log(stack); // [1, 2]
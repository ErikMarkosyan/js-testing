// we can declare variables only with`
// let myName
// let car123
// let $somelet
// let _underline

var myName1 = 'somename'; //old style of declaration
let myName2 = 'somename'; //modern style of declaration

// when we change the value of previous variable by declaratin another one 

let myName = 'unknown'; // this will change the old value

const birthDay = '06.04.1997' // the value of const cannot be changed, if we change it, we will get an error

const name = 'Erik', lastName = 'Markosyan'

// We can also declare two variables and copy data from one into the other.

let device1 = 'Apple'
let device2 = 'PlayStation'

device1 = device2;

console.log(device1); //this will return 'PlayStation', we changed value of device1 from 'Apple' to 'PlayStation'

// Summary
// We can declare variables to store data by using the var, let, or const keywords.

// var – is an old-school variable declaration.
// let – is a modern variable declaration.
// const – is like let, but the value of the variable can’t be changed.

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Code Structure 

// Statements is a ??? 

let firstName // a statement
let dateOfBirth = 0 // a statement
function someFunction() {} // a statement
if(true){} // a statement
2+2 // a statement

// Expression produce values

2+2 // an expression
true // an expression
true && false // an expression
// functionCall(); // whatever the function returns
let declaredVariable // not an expression
declaredVariable // the value of declaredVariable is an expression
declaredVariable = 'new value' // assignment expression

// Summary
// Statements just do things.
// Semicolon is a ; symbol that separates Statements in JavaScript
// Expression - produce values
// Comment your code to describe what the code does and why
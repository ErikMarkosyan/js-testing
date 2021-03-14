// Data types
// There are 8 basic data types in JavaScript:

// number
// bigint
// string
// boolean
// null
// undefined
// object
// symbol

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Number, in number we have +∞ -∞ (infinity), BigInt and NaN.
// NaN isn't equal to anything even to NaN

let n = 123
n = 1.5

// ∞ we can get it as a result of division by zero

console.log(1/0); // infinity

console.log(Infinity); //infinity

// BigInt type was recently added to the language to represent integers of arbitrary length.

const bigInt = 1234567890123456789012345678901234567890n; // <- n

// NaN represents a computational error. 
// NaN is a result of an incorrect or an undefined mathematical operation - Not a Number
// NaN isn't equal to anything even to NaN

console.log('some text' / 2) // NaN, such division is erroneous

console.log('some text' / 2 + 5) // NaN

// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// String

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// Double and single quotes are “simple” quotes. 
// There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. 
// They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

console.log( `the result is ${1 + 2}` ); // the result is 3
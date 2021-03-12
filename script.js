// Data Types (8)

// 1. Number
// 2. Bigint
// 3. String
// 4. Boolean
// 5. Null
// 6. Undefined
// 7. Object
// 8. Symbol 

// 1. Number 

let myN = 500
myN = 500.1

console.log(myN); // it will return 500.1

// We also have infinity type.

console.log(1/0) // Infinity
console.log(Infinity) // Infinity

/* NaN NaN represents a computational error. 
It is a result of an incorrect or an undefined mathematical operation - Not a Number
And if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result.
*/
console.log("my texy" * 12 + 7);

// BigInt

let big = 1n;
console.log(typeof big);

// String

let duble = "duble quotes"
let single = 'single quote'
// let backticks = `can embed another ${}`

let name1 = 'pto'
console.log(`hello, ${name1}!`);

// Boolean 

let isSmaller = 1 < 9; // true

// Null It’s just a special value which represents "nothing", "empty" or "value unknown".

let name = null;
console.log(name);

/* Undefined It makes a type of its own, just like null.

The meaning of undefined is "value is not assigned".

If a variable is declared, but not assigned, then its value is undefined
*/

let x;
console.log(x);

/* There are 8 basic data types in JavaScript.

number for numbers of any kind: integer or floating-point, integers are limited by ±253.
bigint is for integer numbers of arbitrary length.
string for strings. A string may have one or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
object for more complex data structures.
symbol for unique identifiers.
The typeof operator allows us to see which type is stored in a variable.

Two forms: typeof x or typeof(x).
Returns a string with the name of the type, like "string" or "number".
For null returns "object" – this is an error in the language, it’s not actually an object. */

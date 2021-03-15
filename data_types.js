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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Boolean

// The boolean type has only two values: true and false.

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// Boolean values also come as a result of comparisons:

let isGreater = 4 > 1; // true

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Null պրծած զուքարանի թուղթ
// The special null value does not belong to any of the types described above.

// It forms a separate type of its own which contains only the null value:

let age = null;
// It’s just a special value which represents "nothing", "empty" or "value unknown".

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Undefined որ զուքարանի թողթ չկա 

// The special value undefined also stands apart. It makes a type of its own, just like null.

// The meaning of undefined is "value is not assigned".

// If a variable is declared, but not assigned, then its value is undefined:

let x;
console.log(x); // undefined
// Technically, it is possible to assign undefined to any variable:

let x = undefined;
// …But we don’t recommend doing that. Normally, we use null to assign an "empty" or "unknown" value to a variable,
//  and we use undefined for checks like seeing if a variable has been assigned.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Object

// Symbol
// The symbol type is used to create unique identifiers for objects. 
// We mention it here for completeness, but we’ll study it after objects.

// The typeof operator
// The typeof operator returns the type of the argument. 
// It’s useful when we want to process values of different types differently or just want to do a quick check.

// It supports two forms of syntax:

// As an operator: typeof x.
// As a function: typeof(x).
// The call to typeof x returns a string with the type name:

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof null // "object"

typeof function() {} // "function"

// The result of typeof null is "object". That’s wrong. It is an officially recognized error in typeof, 
// kept for compatibility. Of course, null is not an object. 
// It is a special value with a separate type of its own. So, again, this is an error in the language.

// Summary
// There are 8 basic data types in JavaScript.

// number for numbers of any kind: integer or floating-point, integers are limited by ±253.
// bigint is for integer numbers of arbitrary length.
// string for strings. A string may have one or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// object for more complex data structures.
// symbol for unique identifiers.
// The typeof operator allows us to see which type is stored in a variable.

// Two forms: typeof x or typeof(x).
// Returns a string with the name of the type, like "string" or "number".
// For null returns "object" – this is an error in the language, it’s not actually an object.

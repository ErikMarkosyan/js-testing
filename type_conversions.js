// String conversion

// String conversion happens when we need the string form of a value.
// For example, alert(value) does it to show the value.

// We can also call the String(value) function to convert a value to a string:

let value = true;
console.log(value, typeof value); // true "boolean"

value = String(value); // now value is a string "true"
console.log(value, typeof value); // true string

// something = String() will convert a value to string
// String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.

// Numeric Conversion
// Numeric conversion happens in mathematical functions and expressions automatically.
// For example, when division / is applied to non-numbers

console.log("6" / "2") // 3, strings are converted to numbers

// We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
console.log(str, typeof str); // 123 string

let num = Number(str); // becomes a number 123

console.log(num, typeof num); // 123 "number"

// If the string is not a valid number, the result of such a conversion is NaN. For instance:

let age = Number("an arbitrary string instead of a number");

console.log(age); // NaN, conversion failed

// Numeric conversion rules:
// undefined becomes NaN
// null becomes 0
// true and false becomes 1 and 0
// string - Whitespaces from the start and end are removed. 
// If the remaining string is empty, the result is 0. 
// Otherwise, the number is “read” from the string. An error gives NaN.

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

// Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN.

// Boolean Conversion
// Boolean conversion is the simplest one.

// It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).

// The conversion rule:

// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
console.log( Boolean(null) ); // false
console.log( Boolean(undefined) ); // false

// the string with zero "0" is true

console.log( Boolean("0") ); // true
console.log( Boolean(" ") ); // spaces, also true (any non-empty string is true)
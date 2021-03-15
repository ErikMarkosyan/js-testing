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
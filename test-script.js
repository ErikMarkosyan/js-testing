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
And if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result. */

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

If a variable is declared, but not assigned, then its value is undefined */

let q;
console.log(q);

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



// Type Conversions

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

let myValue = 123
console.log(typeof myValue);

myValue = String(myValue);
console.log(myValue);
console.log(typeof myValue);

// Numeric Conversion

/* Numeric conversion happens in mathematical functions and expressions automatically. 
For example, when division / is applied to non-numbers: */

console.log("4" / "2") // 2

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number

let bigNum = 1n;
console.log(bigNum); // 1n

let myBignum = Number(bigNum);

console.log(myBignum, typeof myBignum); // 1
//console.log(typeof myBignum); //number

// Numeric conversion rules

/*undefined becomes NaN
null becomes 0
true and false becomes 1 and 0
string - Whitespaces from the start and end are removed. If the remaining string is empty,
the result is 0. Otherwise, the number is “read” from the string. An error gives NaN. */

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

// Boolean Conversion

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
console.log( Boolean(null) ); // false
console.log( Boolean(undefined) ); // false
console.log( Boolean("0") ); // true
console.log( Boolean(" ") ); // spaces, also true (any non-empty string is true)


// Operators

let x = 20;

x = -x;
console.log( x );

let x1 = 1, y1 = 4
console.log(y1 - x1);

// String concatenation, binary +

let someString = "some " + "string"
console.log(someString);

// Note that if one of the operands is a string, the other one is converted to a string too.

console.log( '12' + 2 ); // "122"
console.log( 22 + '1' ); // "221"

/* See, it doesn’t matter whether the first operand is a string or the second one.
 The rule is simple: if either operand is a string, the other one is converted into a string as well.
However, note that operations run from left to right. If there are two numbers followed by a string,
 the numbers will be added before being converted to a string: */

console.log(1+1+'3'); // = 1+1=2+'3'=23
console.log(1+'4'+1); // 141
console.log(4-1+'1'); // 31
console.log(2+2+'1'+2); // 412
console.log( 2 - '1' ); // 1
console.log( '6' / '2' ); // 3

// Numeric conversion, unary +

/* The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, 
doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number. */

// No effect on numbers
let newX = 1;
console.log( +newX ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0
console.log( +"3" );   // 3
console.log( +"hello" );   // NaN

let banana = "7";
let pinaple = "7";

console.log( banana + pinaple ); // 77

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5

// the longer variant
console.log( Number(apples) + Number(oranges) ); // 5

// Operator precedence

console.log(1 + 2 * 2); // 5
console.log((1+2)*2); // 6

// Assignment

let aX = 2 * 2 + 1;

console.log( aX ); // 5

// It is possible to chain assignments:

let a, b, c;

a = b = c = 2 + 2;

console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4
// Chained assignments evaluate from right to left.

let a1 = 1;
let b2 = 2;
console.log(a1);

let c3 = 3 - (a1 = b2 + 1);

console.log( a1 ); // 3
console.log( c3 ); // 0

// Remainder %

console.log( 7 % 2 ); // 1

// Exponentiation **
console.log( 2 ** 2 ); // 4  (2 * 2)
console.log( 2 ** 3 ); // 8  (2 * 2 * 2)
console.log( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root, that's maths)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

// Increment/decrement 

let counter1 = 2;
counter1++; // works the same as counter = counter + 1, but is shorter
console.log( counter1 ); // 3


let counter2 = 2;
++counter2; // works the same as counter = counter + 1, but is shorter
console.log( counter2 ); // 3

// the same result will be with counter-- or --counter 

// but when we have a new assigned variable prefix form will return 


// Increment/decrement among other operators


// Bitwise operators

/* Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> ) */

// Modify-in-place

// let n = 2;
// n = n + 5;
// n = n * 2;

// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)

// console.log( n ); // 14

// Such operators have the same precedence as a normal assignment, so they run after most other calculations:

// let n = 2;

// n *= 3 + 5;

// console.log( n ); // 16  (right part evaluated first, same as n *= 8)

// The comma operator , is one of the rarest and most unusual operators. Sometimes,
//  it’s used to write shorter code, so we need to know it in order to understand what’s going on.

// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. 
// Each of them is evaluated but only the result of the last one is returned.

// let a = (1 + 2, 3 + 4);

// console.log( a ); // 7 (the result of 3 + 4)

/* Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.

Comma has a very low precedence

Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.

Why do we need an operator that throws away everything except the last expression?

Sometimes, people use it in more complex constructs to put several actions in one line.

For example:

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
Such tricks are used in many JavaScript frameworks. That’s why we’re mentioning them. But usually they don’t improve code readability so we should think well before using them.

*/

// Comparisons

// Boolean

console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)

// String comparison
// To see whether a string is greater than another, JavaScript uses the so-called "dictionary"
//  or "lexicographical" order.

// In other words, strings are compared letter-by-letter.

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

// Comparison of different types
// When comparing values of different types, JavaScript converts the values to numbers.

console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1
// For boolean values, true becomes 1 and false becomes 0.

For example:

console.log( true == 1 ); // true
console.log( false == 0 ); // true
A funny consequence

// It is possible that at the same time:
// Two values are equal. One of them is true as a boolean and the other one is false as a boolean.

let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!

// From JavaScript’s standpoint, this result is quite normal.
// An equality check converts values using the numeric conversion (hence "0" becomes 0),
// while the explicit Boolean conversion uses another set of rules.
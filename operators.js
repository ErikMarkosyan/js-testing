// Operators +, -, *, /

// Unary, Binary, Operand

// An operand – is what operators are applied to. 
// For instance, in the multiplication of 5 * 2 there are two operands: 
// the left operand is 5 and the right operand is 2.
// Sometimes, people call these "arguments" instead of "operands".

// An operator is unary if it has a single operand. 
// For example, the unary negation - reverses the sign of a number:

// Unary

let x = 1;

x = -x;
console.log( x ); // -1, unary negation was applied

// An operator is binary if it has two operands. The same minus exists in binary form as well:

let a = 1, b = 3;
console.log( b - a ); // 2, binary minus subtracts values

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// String concatenation, binary +

// Usually, the plus operator + sums numbers.

// But, if the binary + is applied to strings, it merges (concatenates) them:

let s = "my" + "string";
console.log(s); // mystring

// Note that if one of the operands is a string, the other one is converted to a string too.

console.log( '1' + 2 ); // 12
console.log( 2 + '1' ); // 21
console.log('1' + '1'); // 2

console.log(2 + 2 + '1' ); // "41" and not "221"
console.log(2 + 2 + '1' + 1 + 1); // "4111"

// String concatenation and conversion is a special feature of the binary plus +.
// Other arithmetic operators work only with numbers and always convert their operands to numbers.

// For instance, subtraction and division:

console.log( 2 - '1' ); // 1
console.log( '6' / '2' ); // 3

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Numeric conversion, unary +
// The plus + exists in two forms: the binary form that we used above and the unary form.

// The unary plus or, in other words, the plus operator + applied to a single value, 
// doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// No effect on numbers
let c = 1;
console.log( +c ); // 1

let d = -2;
console.log( +d ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0
console.log( +"3" );   // 3
console.log( +"hello" );   // NaN

// The binary plus would add them as strings:

let apples = "2";
let oranges = "3";

console.log( apples + oranges ); // "23", the binary plus concatenates strings

// If we want to treat them as numbers, we need to convert and then sum them:

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5

// the longer variant
console.log( Number(apples) + Number(oranges) ); // 5

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Operator precedence
// If an expression has more than one operator, the execution order is defined by their precedence, 
// or, in other words, the default priority order of operators.

// From school, we all know that the multiplication in the expression 1 + 2 * 2 should be calculated before 
// the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence 
// than the addition.

// Parentheses override any precedence, so if we’re not satisfied with the default order, 
// we can use them to change it. For example, write (1 + 2) * 2.

// There are many operators in JavaScript. Every operator has a corresponding precedence number. 
// The one with the larger number executes first. If the precedence is the same, 
// the execution order is from left to right.

// Here’s an extract from the precedence table (you don’t need to remember this, 
//   but note that unary operators are higher than corresponding binary ones):

// 17 unary plus +
// 17 unary negation -
// 15 multiplication *
// 15 division /
// 13 addition +
// 13 subtraction -
// 3 assignment =
// As we can see, the "unary plus" has a priority of 17 which is higher than the 13 of "addition" (binary plus). 
// That’s why, in the expression +apples + +oranges, unary pluses work before the addition.
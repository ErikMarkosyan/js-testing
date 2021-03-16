// Function expretion, decoration, declaration, arrow function.

// Function declaration

function myFunction(){
  console.log("Hi!");
}

// myFunction();

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Local variables 

// A variable declared inside a function is only visible inside that function.

function someMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  console.log( message );
}

// someMessage(); // Hello, I'm JavaScript!

// console.log( message ); // <-- Error! The variable is local to the function```

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Outer variables
// A function can access an outer variable as well, for example:

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

// showMessage(); // Hello, John

// The function has full access to the outer variable. It can modify it as well.

let someName = 'John';

function showMessage() {
  someName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + someName;
  console.log(message);
}

// console.log( someName ); // John before the function call

// showMessage();

// console.log( someName ); // Bob, the value was modified by the function

// The outer variable is only used if there’s no local one.

// If a same-named variable is declared inside the function then it shadows the outer one. 
// For instance, in the code below the function uses the local userName. The outer one is ignored:

let userName1 = 'John';

function showMessage() {
  let userName1 = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName1; // Bob
  console.log(message);
}

// the function will create and use its own userName1
showMessage();

console.log( userName1 ); // John, unchanged, the function did not access the outer variable



// Global variables

// Variables declared outside of any function, such as the outer userName in the code above, are called global.

// Global variables are visible from any function (unless shadowed by locals).

// It’s a good practice to minimize the use of global variables. Modern code has few or no globals. 
// Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Parameters
// We can pass arbitrary data to functions using parameters (also called function arguments) .

// In the example below, the function has two parameters: from and text.

function showMessage3(from, text) { // arguments: from, text
  console.log(from + ': ' + text);
}

showMessage3('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage3('Ann', "What's up?"); // Ann: What's up? (**)

// When the function is called in lines (*) and (**), the given values are copied to local variables from and text.
// Then the function uses them.

// Here’s one more example: we have a variable from and pass it to the function. 
// Please note: the function changes from, but the change is not seen outside, 
// because a function always gets a copy of the value:

function showMessage4(from, text) {
  from = '*' + from + '*'; // make "from" look nicer
  console.log( from + ': ' + text );
}

let from = "Ann";

showMessage4(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
// console.log( from ); // Ann

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Default values
// If a parameter is not provided, then its value becomes undefined.

// For instance, the aforementioned function showMessage(from, text) can be called with a single argument:
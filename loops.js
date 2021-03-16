// Loops

// We often need to repeat actions.
// Loops are a way to repeat the same code multiple times.

// While loop

// The while loop has the following syntax:

// while (condition) {
  // code
  // so-called "loop body"
// }

// While the condition is truthy, the code from the loop body is executed.

// For instance, the loop below outputs i while i < 3:

// let a = 0;
// while (a < 3) { // shows 0, then 1, then 2
//   console.log( a );
//   a++;
// }

// A single execution of the loop body is called an iteration. 
// The loop in the example above makes three iterations.

// If a++ was missing from the example above, the loop would repeat (in theory) forever. 
// In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

// Any expression or variable can be a loop condition, not just comparisons: 
// the condition is evaluated and converted to a boolean by while.

// For instance, a shorter way to write while (a != 0) is while (a):

// let b = 3;
// while (b) { // when b becomes 0, the condition becomes falsy, and the loop stops
//   console.log( b );
//   b--;
// }

// Curly braces are not required for a single-line body

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Do…while loop
// The condition check can be moved below the loop body using the do..while syntax:

// do {
//   // loop body
// } while (condition)

// The loop will first execute the body, then check the condition, and, while it’s truthy, 
// execute it again and again.

// For example:

// let c = 0;
// do {
//   console.log( c );
//   c++;
// } while (c < 3);

// This form of syntax should only be used when you want the body of the loop to 
// execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// For loop
// The for loop is the most commonly used loop.

// It looks like this:

// for (begin; condition; step) {
  // ... loop body ...
// }

// Let’s learn the meaning of these parts by example. The loop below runs console.log(i) 
// for d from 0 up to (but not including) 3:

// for (let d = 0; i < 3; d++) { // shows 0, then 1, then 2
//   console.log(d);
// }

// Let’s examine the for statement part-by-part:

// begin i = 0 Executes once upon entering the loop.
// condition i < 3 Checked before every loop iteration. If false, the loop stops.
// body console.log(i) Runs again and again while the condition is truthy.
// step i++ Executes after the body on each iteration.
// The general loop algorithm works like this:

// Run begin
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → ...
// That is, begin executes once, and then it iterates: after each condition test, body and step are executed.

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Inline variable declaration
// Here, the "counter" variable i is declared right in the loop. 
// This is called an “inline” variable declaration. Such variables are visible only inside the loop.

let e = 0;
for (let e = 0; e < 3; e++) {
  // console.log(e); // 0, 1, 2
}
// console.log(e); // error, no such variable
// Instead of defining a variable, we could use an existing one:

// let e = 0;

for (e = 0; e < 3; e++) { // use an existing variable
  // console.log(e); // 0, 1, 2
}

// console.log(e); // 3, visible, because declared outside of the loop

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

//  Skipping parts

// Any part of for can be skipped.
// For example, we can omit begin if we don’t need to do anything at the loop start.
// Like here:

let f = 0; // we have f already declared and assigned

for (; f < 3; f++) { // no need for "begin"
  // console.log( f ); // 0, 1, 2
}
console.log(f); // 3 
// We can also remove the step part:

// let f = 0;

for (; f < 3;) { // here we removed f = 0; and f++;
  // console.log( f++ );
}

// console.log(f);

/*This makes the loop identical to while (f < 3).

We can actually remove everything, creating an infinite loop:

for (;;) {
  // repeats without limits
}
Please note that the two for semicolons ; must be present. Otherwise, there would be a syntax error. */

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// // Breaking the loop
// // Normally, a loop exits when its condition becomes falsy.

// But we can force the exit at any time using the special break directive.

// For example, the loop below asks the user for a series of numbers, "breaking" when no number is entered:

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
console.log( 'Sum: ' + sum );
// The break directive is activated at the line (*) if the user enters an empty line or cancels the input. 
// It stops the loop immediately, passing control to the first line after the loop. Namely, alert.

// The combination "infinite loop + break as needed" is great for situations when a loop’s 
// condition must be checked not in the beginning or end of the loop, but in the middle or 
// even in several places of its body.

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Continue to the next iteration
// The continue directive is a "lighter version" of break. It doesn’t stop the whole loop. Instead, 
// it stops the current iteration and forces the loop to start a new one (if the condition allows).

for (let g = 0; g < 10; g++) {

  // if true, skip the remaining part of the body
  if (g % 2 == 0) continue;

  console.log(g); // 1, then 3, 5, 7, 9
}
// For even values of g, the continue directive stops executing the body and passes 
// control to the next iteration of for (with the next number). So the console.log is only called for odd values.

The continue directive helps decrease nesting
for (let g = 0; g < 10; g++) {
  if (g % 2) {
    alert( g );
  }
}

/* From a technical point of view, this is identical to the example above. 
Surely, we can just wrap the code in an if block instead of using continue.

But as a side-effect, this created one more level of nesting (the console.log call inside the curly braces). 
If the code inside of if is longer than a few lines, that may decrease the overall readability.

No break/continue to the right side of '?'*/

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Labels for break/continue
// Sometimes we need to break out from multiple nested loops at once.

// For example, in the code below we loop over i and j, prompting for the coordinates (h, i) from (0,0) to (2,2):

for (let h = 0; h < 3; h++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${h},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

console.log('Done!');

/*We need a way to stop the process if the user cancels the input.

The ordinary break after input would only break the inner loop. That’s not sufficient–labels, come to the rescue!

A label is an identifier with a colon before a loop:

labelName: for (...) {
  ...
}
The break <labelName> statement in the loop below breaks out to the label:

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
console.log('Done!');
In the code above, break outer looks upwards for the label named outer and breaks out of that loop.

So the control goes straight from (*) to console.log('Done!').

We can also move the label onto a separate line:

outer:
for (let i = 0; i < 3; i++) { ... }
The continue directive can also be used with a label. In this case, 
code execution jumps to the next iteration of the labeled loop.

Labels do not allow to "jump" anywhere
Labels do not allow us to jump into an arbitrary place in the code.

For example, it is impossible to do this:

break label; // doesn't jumps to the label below

label: for (...)
A call to break/continue is only possible from inside a loop and the label must be somewhere above the directive.

Summary
We covered 3 types of loops:

while – The condition is checked before each iteration.

do..while – The condition is checked after each iteration.

for (;;) – The condition is checked before each iteration, additional settings available.

To make an "infinite" loop, usually the while(true) construct is used. 
Such a loop, just like any other, can be stopped with the break directive.

If we don’t want to do anything in the current iteration and would like to forward to the next one, 
we can use the continue directive.

break/continue support labels before the loop. A label is the only way for break/continue to 
escape a nested loop to go to an outer one.

*/
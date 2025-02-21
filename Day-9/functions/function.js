// Function Statement are also known as (Function Declaration)
function name() {
   console.log("name called");
}
name(); //  Calling the function

//  Function Expression
// A function assigned to a variable (Expression doesn't get hoisted)
var firstName = function () {
   console.log("FirstName called");
}
firstName(); //  Calling the function

//  Function Declaration
// Function statements are also known as function declarations.
let secondName = function () {
   console.log("SecondName called");
}
secondName(); //  Calling the function

//  Anonymous Function
// Anonymous functions are functions without a name.
// They are usually assigned to a variable or used as callbacks.
//  This will throw an error because an anonymous function 
// cannot exist independently like this:

/* function () {
   console.log("Anonymous function executed");
};  */

//  Correct usage of an anonymous function (assigned to a variable)
let anonymousFunc = function () {
   console.log("Anonymous function executed");
};
anonymousFunc(); //  Calling the function


//  Named Function Expression
// A function expression where the function has a name (useful for debugging)
const greet = function greeting() {
   console.log("Hello from Named Function Expression");
};
greet(); //  Works fine
// greeting();  Throws error because `greeting` is not accessible outside // reference error


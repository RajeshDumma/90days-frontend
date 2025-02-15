
// variables and type of memory

// here I am creating a instagram  post and its variables .
let postTitle = "My First post";
let countLikes = 0;
const POST_ID = "POST142@3";
var isPublished = false;

console.log(postTitle);    // Should show: My First Post
postTitle = "Updated Post";
POST_ID = "POST124";
console.log(postTitle);
console.log(POST_id);  // TypeError: Assignment to constant variable.

/*Explanation : const is used to declare constants, meaning their values cannot be reassigned after initialization.
When you try to assign a new value to POST_ID, JavaScript will throw a TypeError because constants 
are immutable ,cannot be changed after declaration. */


//  Global Variables (Accessible Anywhere)
let storyViews = 10;  // Declared with let (global scope)
const storyDuration = 24; // Declared with const (global scope)

{
    //  Block Scoped Variables (Only Accessible Inside This Block)
    let storyFilter = "Normal";  // Block-scoped (only accessible within this block)
    var storyLoaction = "Vijaywada"; // Function-scoped (not block-scoped, leaks outside)
    const uploadedTime = "12:00AM"; // Block-scoped (only accessible within this block)
}

 // ASSIGNMENT -2  :
 /* 
   Explanation of Variable Scope:
  let storyFilter and const uploadedTime are *block-scope**, meaning they can 
    only be accessed **inside* the block `{}` where they are declared.
  var storyLoaction` is **function-scoped**, meaning it leaks out of the block 
    and becomes accessible **outside** the block. */

// Accessing Global Scope Variables (Works Fine)
console.log(storyViews, ": storyViews");  // Output: 10 : storyViews
console.log("storyDuration", storyDuration); // Output: storyDuration 24
// These print successfully because 'storyViews' and 'storyDuration' are global.  

//  Avoiding var to prevent accidental variable leakage
// Real-world best practice: Avoid using var to prevent unexpected scope issues.

// Accessing Block Scope Variables

console.log(storyLoaction); 
//  Output: Vijaywada (Because var leaks out of the block and is accessible globally)

console.log(storyFilter); 
//  ReferenceError: storyFilter is not defined
// `storyFilter` is block-scoped (declared with let), so it's inaccessible outside the block.

console.log(uploadedTime); 
//  ReferenceError: uploadedTime is not defined
// "uploadedTime" is block-scoped (declared with const), so it's inaccessible outside the block.
 
 

// ASSIGNMENT -3 :

let userName = "Rajesh";
let followerCount = 120;

let profile = {
    name : "Vamshi",
    age : 20,
    location:"Kurnool"
}

let profile2 = profile ;
profile2.name = "Nagaraju";
console.log(userName);
console.log(profile);
console.log(profile2);  // ?

// Stores primitive data types (string, number, boolean, null, undefined, symbol, bigint).
// Example : 

let a = 10;   // Stored in Stack
let b = a;    // A copy of 'a' is created in Stack
b = 20;       // Changing 'b' does NOT affect 'a', becaues each variable gets a separate space in memory.

console.log(a); // Output: 10
console.log(b); // Output: 20

// Since primitives are stored in stack, b gets a copy of a, so modifying b does not affect a.


/* Heap Memory ?
A larger and dynamic memory pool where objects, arrays, and functions are stored.
Variables hold a reference (memory address), not the actual value */

let obj1 = { name: "Mani" };  // Stored in Heap
let obj2 = obj1;  // obj2 stores a reference to obj1, NOT a copy

obj2.name = "Harsha";  // Changing obj2 and also changes obj1!

console.log(obj1.name); // Output: "Jane"
console.log(obj2.name); // Output: "Jane"
// Since objects are stored in heap, obj2 holds a reference to the same memory location as obj1. Any change to obj2 also affects obj1.
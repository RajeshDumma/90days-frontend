# Day 11: JavaScript Variables Assignments
## Understanding Variables & Memory

### Assignment 1: Variable Types & Memory 📝

/*
Assignment: Create Instagram Post Variables
Observe how different types of data are stored
*/

// Create these variables:
let postTitle = "My First Post";
let likesCount = 0;
const POST_ID = "POST123";
var isPublished = false;

// Try this:
console.log(postTitle);    // Should show: My First Post
postTitle = "Updated Post";
// POST_ID = "POST124";    // This will error! Why?

Memory Visualization:
┌────────────┬────────────────┐
│ postTitle  │ "Updated Post" │
│ likesCount │      0         │
│ POST_ID    │   "POST123"    │ 🔒
│isPublished │     false      │
└────────────┴────────────────┘
```

### Assignment 2: Variable Scope 🎯

/*
Assignment: Create Instagram Story Variables
See how variables work in different scopes
*/

// Global Variables
let storyViews = 0;
const STORY_DURATION = 24; // hours

{
    // Block scope
    let storyFilter = "Normal";
    var storyLocation = "Hyderabad";
    const UPLOADED_TIME = "9:00 AM";
}

// Check what happens:
console.log(storyLocation);  // Works! Why?
// console.log(storyFilter);    // Error! Why?
// console.log(UPLOADED_TIME);  // Error! Why?

Memory Visualization:
Global Memory:
┌─────────────────┬────────┐
│ storyViews      │   0    │
│ STORY_DURATION  │   24   │
│ storyLocation   │"Hyd..."│
└─────────────────┴────────┘
```

### Assignment 3: Reference vs Value 📚

/*
Assignment: Create Instagram User Profile
Understand how objects and primitives are stored
*/

// Create these variables:
let userName = "john_doe";
let followerCount = 100;

let profile = {
    name: "John Doe",
    age: 25
};

let profile2 = profile;  // What happens in memory?

// Try changing values:
userName = "jane_doe";     // Only userName changes
profile2.name = "Jane";    // Both profile and profile2 change! Why?

Memory Visualization:
Stack (Values):
┌──────────────┬────────────┐
│ userName     │ "jane_doe" │
│ followerCount│    100     │
└──────────────┴────────────┘

Heap (References):
┌──────────┐    ┌─────────────┐
│ profile  │───►│ name: "Jane"│
│ profile2 │───►│ age: 25     │
└──────────┘    └─────────────┘
```

### Assignment 4: Variable Hoisting ⬆️

/*
Assignment: Test Variable Hoisting
See how different variables behave before declaration
*/

// Try this sequence:
console.log(views);      // What happens?
// console.log(likes);   // What happens?
// console.log(SHARES);  // What happens?

var views = 100;
let likes = 50;
const SHARES = 25;

Memory Creation Phase:
┌─────────┬───────────┬───────────┐
│ views   │ undefined │ Hoisted   │
│ likes   │    -      │ TDZ       │
│ SHARES  │    -      │ TDZ       │
└─────────┴───────────┴───────────┘
```

### Assignment 5: Primitive Data Types 📊

/*
Assignment: Create Instagram Post Analytics
Work with different primitive types
*/

// Create these variables:
let postCaption = "Beautiful sunset!";  // String
let viewCount = 1500;                   // Number
let isLiked = false;                    // Boolean
let postTime;                           // Undefined
let oldPost = null;                     // Null

// Check type of each:
console.log(typeof postCaption);  // "string"
console.log(typeof viewCount);    // "number"
console.log(typeof isLiked);      // "boolean"
console.log(typeof postTime);     // "undefined"
console.log(typeof oldPost);      // "object"

Memory Layout:
┌────────────┬──────────────────┬─────────┐
│ Variable   │     Value        │  Type   │
├────────────┼──────────────────┼─────────┤
│postCaption │"Beautiful sunset"│ String  │
│viewCount   │      1500        │ Number  │
│isLiked     │      false       │ Boolean │
│postTime    │    undefined     │Undefined│
│oldPost     │      null        │ Object  │
└────────────┴──────────────────┴─────────┘
```

### Assignment 6: Object Properties 🎭

/*
Assignment: Create Instagram Post Object
See how object properties are stored and accessed
*/

// Create a post object:
const post = {
    id: "123",
    text: "Hello World",
    likes: 0
};

// Try modifying:
post.likes = 1;          // Works! Why?
// post = {};           // Error! Why?
post.shares = 0;        // Works! Why?

Memory Visualization:
Stack:                 Heap:
┌──────┐            ┌─────────────┐
│ post │──reference─►│ id: "123"   │
└──────┘            │ text: "Hello"│
                    │ likes: 1     │
                    │ shares: 0    │
                    └─────────────┘
```

### Practice Questions 📝

1. **What will happen?**
let x = 10;
let y = x;
x = 20;
console.log(y);  // What prints? Why?
```

2. **Spot the Error:**
const user = { name: "John" };
user.name = "Jane";      // Works or error?
user = { name: "Bob" };  // Works or error?
```

3. **Memory Challenge:**
let a = { value: 10 };
let b = a;
a.value = 20;
console.log(b.value);  // What prints? Why?
```

### Tips for Success 🌟

1. **Remember:**
   - Variables are like containers
   - const doesn't mean immutable for objects
   - let and const are block-scoped
   - var is function/globally scoped

2. **Watch out for:**
   - Trying to access variables before declaration
   - Modifying const variables
   - Confusing reference vs value

3. **Best Practices:**
   - Use meaningful variable names
   - Prefer const when possible
   - Keep variables in smallest needed scope
   - Initialize variables before using
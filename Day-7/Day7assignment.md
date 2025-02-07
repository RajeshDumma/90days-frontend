# 📘 Day 7 Assignment: Objects & Arrays for Beginners

## Part 1: Object Creation Practice (40 points)

Create a file named `objectPractice.js`


// 1. Create a movie object using the simple way (object literal)
const movie1 = {
    name: "Avatar",
    price: 200,
    language: "English"
};

// 2. Create empty object first, then add properties
const movie2 = {};
movie2.name = "Batman";
movie2.price = 180;
movie2.language = "Hindi";

// 3. Create object using square bracket notation
const movie3 = {};
movie3["name"] = "Superman";
movie3["price"] = 220;
movie3["language"] = "Telugu";

// YOUR TASKS:

// Task 1: Create a student object with:
// - name
// - age
// - grade
// Try all three ways shown above!

// Task 2: Create a mobile phone object with:
// - brand
// - price
// - color
// Try all three ways!

// Task 3: Print each object using console.log()


## Part 2: Array Creation Practice (40 points)

Create a file named `arrayPractice.js`


// 1. Create array using array literal
const fruits1 = ["apple", "banana", "orange"];

// 2. Create empty array, then add elements
const fruits2 = [];
fruits2[0] = "mango";
fruits2[1] = "grapes";
fruits2[2] = "kiwi";


// YOUR TASKS:

// Task 1: Create an array of 5 colors using each method above

// Task 2: Create an array of 5 numbers using each method above

// Task 3: Print all arrays using console.log()


## Part 3: Combining Objects and Arrays (20 points)

Create a file named `combinedPractice.js`


// Example: Array of movie objects
const movies = [
    {
        name: "Movie 1",
        price: 200
    },
    {
        name: "Movie 2",
        price: 180
    }
];

// YOUR TASKS:

// Task 1: Create an array of 3 student objects
// Each student should have:
// - name
// - age
// - grade

// Task 2: Create an array of 3 mobile objects
// Each mobile should have:
// - brand
// - price
// - color


## How to Test Your Code:

1. Using Chrome Console:
   - Right-click on any webpage
   - Click "Inspect"
   - Click "Console" tab
   - Copy and paste your code
   - Press Enter

2. Test Object Creation:

// Copy this to console
const student = {
    name: "John",
    age: 15,
    grade: "A"
};
console.log(student);
console.log(student.name);    // Shows name
console.log(student["age"]); // Shows age


3. Test Array Creation:

// Copy this to console
const colors = ["red", "blue", "green"];
console.log(colors);
console.log(colors[0]);     // Shows first color
console.log(colors.length); // Shows how many colors


4. Test Combined Objects and Arrays:

// Copy this to console
const students = [
    {name: "John", age: 15},
    {name: "Jane", age: 16}
];
console.log(students);
console.log(students[0].name); // Shows first student's name


## 📝 Submission Requirements:

1. Create three files:
   - objectPractice.js
   - arrayPractice.js
   - combinedPractice.js

2. In each file:
   - Add comments explaining your code
   - Print all results using console.log()
   - Try different ways of creating objects/arrays

3. Take screenshots of:
   - Your code
   - Console output showing results

## 🌟 Extra Practice (Optional):

1. Object Practice:
   - Create a book object
   - Create a car object
   - Create a restaurant object

2. Array Practice:
   - Create an array of cities
   - Create an array of friends' names
   - Create an array of hobby names


If u are okay? you can continue otherwise leave this section

Understanding Primitives (30 points)
Create file: primitives.js

// 💡 TASK 1: PRIMITIVE TYPES
// For each type, create a variable and then check its type using typeof

// 1️⃣ Number
let moviePrice = 299;
console.log('Type of moviePrice:', typeof moviePrice);
// Expected output: "Type of moviePrice: number"

// 2️⃣ String
let movieTitle = "Avengers";
console.log('Type of movieTitle:', typeof movieTitle);
// Expected output: "Type of movieTitle: string"

// 3️⃣ Boolean
let isAvailable = true;
console.log('Type of isAvailable:', typeof isAvailable);
// Expected output: "Type of isAvailable: boolean"

// 4️⃣ Undefined
let nextShowTime;
console.log('Type of nextShowTime:', typeof nextShowTime);
// Expected output: "Type of nextShowTime: undefined"

// 5️⃣ Null
let specialOffer = null;
console.log('Value of specialOffer:', specialOffer);
console.log('Type of specialOffer:', typeof specialOffer);
// Expected output: "Type of specialOffer: object" (this is a JavaScript quirk!)

// 🔄 Practice: Now create your own examples for each type!



nonPrimitives.js


// 💡 TASK 2: NON-PRIMITIVE TYPES

// 1️⃣ Arrays
// Movie List Example
const movies = [
    "Inception",
    "The Dark Knight",
    "Interstellar",
    "Tenet",
    "Oppenheimer"
];

// Print array and its length
console.log("Movies:", movies);
console.log("Number of movies:", movies.length);

// 2️⃣ Objects
// Movie Details Example
const movieDetails = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2021,
    price: {
        normal: 200,
        premium: 350
    },
    showTimings: ["10:00 AM", "2:00 PM", "6:00 PM"]
};

// Print object
console.log("Movie Details:", movieDetails);

// 🎬 YOUR TURN! Create:
// 1. An array of your favorite movies
// 2. An object representing a movie ticket booking



🎯 Part 3: Mastering Map Function (40 points)
Create file: mapPractice.js


// 💡 TASK 3: MAP FUNCTION EXERCISES

// 1️⃣ Basic Map Example
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);

// 2️⃣ Movie Pricing Exercise
const movieList = [
    { title: "Movie 1", price: 200 },
    { title: "Movie 2", price: 150 },
    { title: "Movie 3", price: 300 }
];

// Format prices to include "₹" symbol
const formattedMovies = movieList.map(movie => {
    return {
        title: movie.title,
        formattedPrice: `₹${movie.price}`
    };
});

console.log("Formatted Movies:", formattedMovies);

// 3️⃣ BookMyShow Scenario
const showTimings = [
    { time: "10:00 AM", seats: 50 },
    { time: "2:00 PM", seats: 0 },
    { time: "6:00 PM", seats: 25 }
];

// Create availability status
const availabilityStatus = showTimings.map(show => {
    return {
        time: show.time,
        status: show.seats > 0 ? "Available" : "Housefull",
        seatsLeft: show.seats
    };
});

console.log("Show Availability:", availabilityStatus);

// 🎯 YOUR CHALLENGES:
// 1. Create an array of 5 movie objects with: title, rating, price
// 2. Use map to create a "premium" price (original price + 100)
// 3. Use map to create movie recommendations based on rating



📝 Final Project: Mini BookMyShow (Extra Credit)
Combine all concepts to create a small movie booking system:

// Create an array of movie objects
const movieCollection = [
    {
        title: "Inception",
        price: 200,
        seatsAvailable: 50,
        ratings: 4.5
    },
    // Add 4 more movies
];

// Your tasks:
// 1. Use map to display all movies with their details
// 2. Use map to show only available movies
// 3. Use map to apply weekend surge pricing


📅 Submission Guidelines

Create three JavaScript files:

primitives.js
nonPrimitives.js
mapPractice.js


Submit:

Source code files
Screenshots of console output
Any extra credit work


Due Date: Before next class


🔍 Tips for Success

Test each example as you write it
Use console.log() to verify outputs
Comment your code to explain your thinking
Try the extra credit for additional practice
Ask questions if you get stuck!


🎯 Expected Learning Outcomes
After completing this assignment, you should be able to:

Identify and use all JavaScript primitive types
Work with arrays and objects confidently
Transform data using the map function
Apply these concepts to real-world scenarios

Need help? Reach out in our class discussion board!
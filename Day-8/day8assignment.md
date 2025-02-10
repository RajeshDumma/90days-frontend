# Day 8: JavaScript Objects & DOM Basics  

## Book MyShow App Creation!

### Part 1: Primitives vs Non-Primitives (Morning Session)

#### 1. Data Types Comparison


// Primitives (Single Values)
let movieName = "Sankrathi Vastunam"; // String
let rating = 4.5; // Number
let isBlockbuster = true; // Boolean

// Non-Primitives (Objects/Collections)
let movie = { 
  name: "Daku Maharaj", 
  genre: "Action" 
}; // Object

let showTimes = ["10AM", "2PM", "6PM"]; // Array


Practice Exercise 1:

// Create movie object with array
let myMovie = {
  title: "Your Favorite Movie",
  actors: ["Actor1", "Actor2"],
  rating: 4.8,
  is3D: false
};


#### 2. Creating Objects & Arrays


// 3 Ways to Create Objects
// 1. Literal Method (Most Common)
let movie1 = { 
  name: "Game Changer", 
  director: "Rajamouli" 
};

// 2. Empty Object + Properties
let movie2 = {};
movie2.name = "RRR";
movie2.budget = "500Cr";

// 3. From Existing Object
let movie3 = Object.create(movie1);
movie3.name = "Bahubali";

// 3 Ways to Create Arrays
let prices = [250, 300, 400]; // Literal
let seats = new Array(60, 60, 60); // Constructor
let codes = Array.from("A12B34"); // From string


Practice Exercise 2:

// Create theater object with arrays
let theater = {
  name: "PVR Cinemas",
  screens: ["Screen1", "Screen2"],
  facilities: ["AC", "Dolby Atmos"],
  showCount: 5
};


### Part 2: DOM Basics (Afternoon Session)

#### 1. DOM Tree Structure

html
<!-- Family Tree Analogy -->
<html> <!-- Grandfather -->
  <head> <!-- Father -->
    <title>First Child</title>
  </head>
  <body> <!-- Uncle -->
    <div id="screen"> <!-- Cousin -->
      <button>Book Now</button> <!-- Grandchild -->
    </div>
  </body>
</html>


#### 2. DOM Manipulation Basics


// 1. Select Element
let screenDiv = document.getElementById("screen");

// 2. Change Properties
screenDiv.style.backgroundColor = "black";
screenDiv.innerHTML = "<h2>Now Showing</h2>";

// 3. Create New Elements
let newButton = document.createElement("button");
newButton.textContent = "6PM Show";
screenDiv.appendChild(newButton);


Practice Exercise 3:

// Create movie card dynamically
let card = `
  <div class="movie-card">
    <h3>${myMovie.title}</h3>
    <p>Rating: ${myMovie.rating}/5</p>
  </div>`;
document.body.innerHTML += card;


### Assignments

#### Assignment 1: Movie Object Creation  
Create `movies.js`:

// Theater Data
const cinema = {
  name: "AMB Cinemas",
  location: "HiTech City",
  movies: [
    { 
      title: "Kalki", 
      shows: ["10AM", "3PM"],
      seats: [60, 60]
    },
    {
      title: "Pushpa 2",
      shows: ["11AM", "4PM"],
      seats: [60, 60]
    }
  ]
};

// Display in Console
console.log("Theater Name:", cinema.name);
console.log("First Movie:", cinema.movies[0].title);


#### Assignment 2: DOM Movie Display  
Create `index.html`:
html
<!DOCTYPE html>
<html>
<head>
    <title>Movie Booking</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div id="movies" class="row p-4"></div>
    <script src="movies.js"></script>
    <script>
    // Display Movies
    let container = document.getElementById("movies");
    
    cinema.movies.forEach(movie => {
        let card = `
        <div class="col-md-6">
            <div class="card mb-3">
                <div class="card-body">
                    <h3>${movie.title}</h3>
                    <div class="shows">
                        ${movie.shows.map(time => `
                            <button class="btn btn-primary m-2">
                                ${time} (${movie.seats[movie.shows.indexOf(time)]} seats)
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>`;
        container.innerHTML += card;
    });
    </script>
</body>
</html>


#### Assignment 3: GitHub Update  
1. Create `movie-booking` repo
2. Add files:


movie-booking/
├── index.html
├── movies.js
└── README.md


3. Commit message: "Added basic movie booking system"

### Success Criteria ✅

1. JavaScript Objects:
   -  Created movie objects properly
   -  Used arrays inside objects
   -  Accessed nested properties

2. DOM Manipulation:
   -  Successfully selected elements
   -  Dynamically created HTML
   -  Used template literals

3. GitHub:
   -  Repository created
   -  Proper folder structure
   -  Meaningful commit message

### Tips for Success 💡

1. Object Tips:
   - Use `const` for main objects
   - Access properties with dot notation
   - Keep related data together

2. DOM Tips:
   - Test selectors in console
   - Use `+=` carefully with innerHTML
   - Prefer template literals

### Common Mistakes ⚠️

1. Objects:
   - Forgetting commas between properties
   - Misspelling property names
   - Not using proper nesting

2. DOM:
   - Missing element IDs
   - Forgetting .join() with arrays
   - Not escaping special characters


Remember:  
"Practice makes perfect! Start with simple objects and gradually add complexity." 🎥🍿
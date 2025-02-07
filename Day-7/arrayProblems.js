/*

Part 2: Array Creation Practice Tasks

Create an Array of Cities:
Use both array literal and dynamic addition methods to list 5 cities.

Create an Array of Grocery Items:
Use both methods to list items like milk, bread, eggs, butter, cheese.

Create an Array of Days of the Week:
Use both methods to list all 7 days.

Create an Array of Favorite Movies:
Use both methods to list your 5 favorite movies.
*/

// test array creation :

const color = ["red", "blue", "green"];

console.log(color + "\n" + color[1] + "\n" + color.length);
 // here printing all colors, index color and size of array within one console.

// Create an Array of Cities:

const cities = ["Kurnool" , "Anathapur", "Chithoor","kadapa" ,"Nellur"];

// Another Way to create array

const mondal = [];
mondal[0] = "Pathikonda";
mondal[1] = "Adhoni";
mondal[2] = "Dhone";

console.log(cities);
console.log(mondal);

console.log(mondal.length);
console.log(mondal[2]);
console.log(cities.length);
console.log(cities[0] , cities[2]);


// numbers 

/* const numbers = [2 , 6 , 8 , 4, 9]; 

console.log(numbers);

// here i want to print square of each element of numbers

for(let  i =0 ; i <= numbers.length;i++){
    let double = numbers[i]*numbers[i]
    console.log(double);
}

// same as using map method double of each element

const double = numbers.map(item => item*2); // if you want only items put only items

console.log(double); */


// Create an Array of Favorite Movies:
// Use both methods to list your 5 favorite movies.

const movies = ["RRR","SAI","Vikram","RX100"];

console.log(movies[1]);
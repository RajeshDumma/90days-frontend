// Creating an array of numbers
let array = [10, 20, 30, 40, 60, 70];

// Logging the original array
console.log("Array Values:", array);

// Logging each index and value using the map() method
console.log("Printing values along with index number using map() method:");

array.map((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});

// Doubling each array value using the map() method
console.log("Printing double of each value:");

// Using map() to create a new array with doubled values
const doubleValue = array.map(value => value * 2);

// Logging the new array with doubled values
console.log("Doubled Values Array:", doubleValue);

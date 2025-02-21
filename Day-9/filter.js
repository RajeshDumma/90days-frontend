const array = [2, 4, 5, 6, 7, 8, ,9 , 10]; 
//  Filtering only even values (numbers divisible by 2)
console.log("Filtering only even values:", array.filter(value => value % 2 === 0)); 
// The filter method checks if a number is divisible by 2 (even). 
// Output wii be : [2, 4, 6, 8, 10] 

//  Behind-the-code-check like: Implementing filter manually using a `for` loop
function even(array) {
    let evenNumbers = []; // Store even numbers
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]); // Add even number to the array
        }
    }
    return evenNumbers.length > 0 ? evenNumbers : "No even numbers found"; 
    // If no even numbers exist, return a message
}
console.log(even(array)); // Output: [2, 4, 6, 8, 10]

//  Filtering only odd values (numbers not divisible by 2)
console.log("Filtering only odd values:", array.filter(value => value % 2 !== 0)); 

// The filter method checks if a number is NOT divisible by 2 (odd).
// Output: [5, 7, 9] 

//  Filtering numbers greater than 4
console.log("Filtering values greater than 4:", array.filter(value => value > 4)); 

// The filter method checks if a number is greater than 4.
// Output: [5, 6, 7, 8, 9, 10] 



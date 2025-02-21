let arr = [2, 3, 4, 5, 4, 6, 7, 8];

// Using the reduce method to find the sum of the array
const output = arr.reduce(function (acc, curr) { // Accumulate and currentValue
    acc = acc + curr; // Accumulate the sum
    return acc; // Return the updated sum for the next iteration
}, 0); // arr is not empty 
console.log(output); // Output: 39

// Behind the scenes: Reduce method works like this
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]; // Adding each element to sum
    }
    return sum; // Returning final sum
}
console.log(findSum(arr)); // Output: 39
// Finding the maximum value using reduce method
const maxValue = arr.reduce(function (max, curr) {
    if (curr > max) { // Compare current value with max
        max = curr; // Update max if current value is greater
    }
    return max; // Return max for the next iteration
}, arr[0]); // Initialize max with the first element of the array
console.log(maxValue); // Output: 8

// Behind the scenes: Finding max value without reduce
function findMax(arr) {
    let findMax = 0; // Initialize with the first element (fix) 0 ;
    for (let i = 1; i < arr.length; i++) { // Start loop from index 1
        if (findMax < arr[i]) { // Compare current element with max
            findMax = arr[i]; // Update max if current element is greater
        } }
    return findMax; // Return the final max value
}
console.log(findMax(arr)); // Output: 8

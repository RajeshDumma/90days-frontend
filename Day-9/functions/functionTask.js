/* Write a function greet(name) that takes a name and returns "Hello, [name]!".
Example: greet("Alice") → "Hello, Alice!" */

function greet(recined){ // here recived is parameter
   console.log("Hello" , recined);
}
greet("Rajesh"); // here rajesh is an Argument

/* Write a function sum(a, b) that takes two numbers and returns their sum.
Example: sum(5, 10) → 15 */

function add(x , y){
console.log(x + y);
}
add(5 , 10);

/* Write a function isEven(num) that returns true if num is even, otherwise false.
Example: isEven(8) → true, isEven(7) → false */

function isEven(findEven){
  let search = (findEven % 2 == 0) ? "even":"odd";
    console.log(search);
}
isEven(4);

/* Write a function maxOfThree(a, b, c) that returns the largest of the three numbers.
Example: maxOfThree(5, 9, 2) → 9 */

function maxOfThree(x , y , z){

    const findMax = ((x > y && x > z)? x : (y > z) ? y : z);
    console.log(findMax);
}
maxOfThree(5 , 9 , 2);

/* Generate Random OTP
Write a function generateOTP(n) that generates a random n-digit OTP.
Example: generateOTP(4) → "7291" */

function generateOTP(n) {
    let otp = "";
    for (let i = 0; i < n; i++) {
        otp += Math.floor(Math.random() * 10); // Generates a random digit (0-9)
    }
    return otp;
}

// Example usage:
console.log(generateOTP(4));  // Example output: "7291" gives the random values
console.log(generateOTP(6));  // Example output: "384620"

/* const numbers = [1,2,3,4,5];

const double = numbers.map(num => num *2);

const div = numbers.map(num => num%2 === 0);
const num = numbers.filter(num => num%2===0);

console.log("Orginal numbers : " , numbers );
console.log("doubled numbers : " ,double);
console.log("divisible by 2 numbers : ",div);
console.log("here print numbers : ",num); */

const movieList = [
    {title:"RRR" , price : 300},
    {title : "Pushpa" , price : 250},
    {title : "Nani" , price : 150}
];

console.log(movieList);
// here format price to include "$" symbol 

const formattedPrice = movieList.map(movie => {
    return {
        title : movie.title,
        formattedPrice : `₹${movie.price}`
    };
});

console.log("formatted Movies : ",formattedPrice);
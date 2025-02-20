/* Given an array of products ([{ name: "Laptop", price: 50000 }, ...]), 
use map to add a new property discountPrice (10% off). */

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Smartphone", price: 30000 },
    { name: "Tablet", price: 20000 },
    { name: "Headphones", price: 5000 },
    { name: "Smartwatch", price: 10000 }
];

const discountedProducts = products.map(product =>({
    discountedProduct : product.price * 0.9 
}));

console.log(discountedProducts);

/* Scenario 2: Product List with Discount Badges
Build a product catalog where each card displays the following:

Product Name
Brand
Price
Discount (e.g., 20% off)
Product Image
A "Buy Now" button.
Challenge:

Add a badge (e.g., class="badge bg-success") to display the discount percentage on the card.
Highlight products with discounts greater than 50% by changing the card's background color. */



const products = [
    {
        name: "Wireless Bluetooth Headphones",
        brand: "Sony",
        price: "₹7,999",
        discount: "52% off",
        image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        name: "Gaming Laptop",
        brand: "ASUS",
        price: "₹99,999",
        discount: "15% off",
        image: "https://m.media-amazon.com/images/I/71CN-GQNZ8L._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        name: "Smartwatch",
        brand: "Apple",
        price: "₹32,999",
        discount: "10% off",
        image: "https://m.media-amazon.com/images/I/71SAHzzQqkL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        name: "4K Smart TV",
        brand: "Samsung",
        price: "₹72,499",
        discount: "55% off",
        image: "https://m.media-amazon.com/images/I/81h-r-3hioL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        name: "Wireless Gaming Mouse",
        brand: "Logitech",
        price: "₹3,499",
        discount: "30% off",
        image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        name: "4K Smart TV",
        brand: "Samsung",
        price: "₹72,499",
        discount: "45% off",
        image: "https://m.media-amazon.com/images/I/81h-r-3hioL._AC_UY327_FMwebp_QL65_.jpg"
    },
];

const productList = document.getElementById("row");

if (products.length === 0) {
    productList.innerHTML = '<p class="text-center mt-5">No products available</p>';
} else {
    const cards = products.map(product => {
        // Extract the numeric discount value (e.g., "20% off" → 20)
        const discountText = product.discount;  // Example: "20% off"
        const discountValue = parseInt(discountText);  // Extracts 20

        // If discount is greater than 50%, add a highlight class
        let highlightClass = "";
        if (discountValue > 50) {
            highlightClass = "bg-warning";  // Yellow background for high discount
        }

        return `
            <div class="col-md-4 mb-4">
                <div class="card ${highlightClass}" >
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name} - ${product.brand} </h5>
                        <p class="card-text">
                            <s>M.R.P ₹10,000</s>
                            <strong>${product.price}</strong>
                            <span class="badge bg-success span p-2">${product.discount}</span>
                        </p>
                        <a href="#" class="btn btn-primary button ">Buy Now</a>
                    </div>
                </div>
            </div>
        `;
    }).join(""); // Join the array into a single string

    productList.innerHTML = cards;
}

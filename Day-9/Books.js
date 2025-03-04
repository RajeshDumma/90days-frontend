const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic Fiction",
        image: "https://m.media-amazon.com/images/I/71kxa1-0AfL.AC_UY327_FMwebp_QL65.jpg"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian Fiction",
        image: "https://m.media-amazon.com/images/I/71kxa1-0AfL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Historical Fiction",
        image: "https://m.media-amazon.com/images/I/81af+MCATTL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Coming-of-Age Fiction",
        image: "https://m.media-amazon.com/images/I/71yMZ3FnYpL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        image: "https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UY327_FMwebp_QL65_.jpg"
    }
];

const booksCard = document.getElementById("team");


if (books.length === 0) {
    booksCard.innerHTML = '<p class="text-center mt-5">No books available</p>';
} else {
    const cards = books.map(book => {
        return `
        <div class="col-md-4 col-sm-6 mt-4">
            <div class="card cards" style="width: 18rem;">
                <img src="${book.image}" class="card-img-top" alt="${book.title}" >
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.author}, ${book.genre}</p>
                    <a href="#" class="btn btn-primary button">Read Now</a>
                </div>
            </div>
        </div>
        `;
    });

    booksCard.innerHTML = `
    <div class="row">
        ${cards.join("")}
    </div>
    `;
}

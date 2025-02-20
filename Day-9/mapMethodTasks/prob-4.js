/* Given an array of employee objects ([{ id: 1, name: "Alice", salary: 50000 }, ...]),
 transform it into an array of objects with keys employeeID and fullName. */

const employees = [
    { id: 1, name: "Alice", salary: 50000 },
    { id: 2, name: "Bob", salary: 60000 },
    { id: 3, name: "Charlie", salary: 55000 },
    { id: 4, name: "David", salary: 70000 },
    { id: 5, name: "Emma", salary: 65000 },
    { id: 6, name: "Frank", salary: 48000 },
    { id: 7, name: "Grace", salary: 52000 },
    { id: 8, name: "Hannah", salary: 75000 },
    { id: 9, name: "Isaac", salary: 68000 },
    { id: 10, name: "Jack", salary: 62000 }
];

const employeeDetails = employees.map(employee =>({
    employeeID : employee.id,
    fullName : employee.name
}))
console.log(employeeDetails);


// task : 2

/* Given an array of objects representing books ([{ title: "Book A", author: "Author 1" }, ...]), 
use map to return an array of strings like ["Book A by Author 1", ...]. */

const books = [
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" }
];

const bookDetails  = books.map(book => `${book.title} by ${book.author}`);

console.log(bookDetails);

// task-3

/* Given an array of objects containing user details ([{ name: "john doe", email: "john@example.com" }, ...]),
 capitalize the first letter of each word in the name.
 */
const users = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Alice Smith", email: "alice@example.com" },
    { name: "Bob Johnson", email: "bob@example.com" },
    { name: "Emma Wilson", email: "emma@example.com" },
    { name: "David Brown", email: "david@example.com" },
    { name: "Sophia Martinez", email: "sophia@example.com" },
    { name: "Liam Miller", email: "liam@example.com" },
    { name: "Olivia Davis", email: "olivia@example.com" },
    { name: "Noah Garcia", email: "noah@example.com" },
    { name: "Mia Anderson", email: "mia@example.com" }
];

const capitalizedUsers = users.map(user => ({
    ...user, // Keep other properties
    name: user.name
        .split(" ") // Split name into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
        .join(" ") // Join words back together
}));

console.log(capitalizedUsers);
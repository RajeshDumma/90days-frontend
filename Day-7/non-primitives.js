
// Non-Primitive DataType

// Arrays
// Movie Lists Example 

const movies = ["Pushpa 2", "vikram", "simba", "RRR"];

console.log("Number of Movies : ", movies.length + "\n" + movies);

// Objects 
// Movie Details Example

const movieDetails = {
    tilte: "Pushpa-1",
    director: "Sukumar",
    year: 2022,
    price: {
        normal: 150,
        premium: 300
    },

    showTimings: ["10:00 AM", "2:00 PM", "6:00 PM"]
};

console.log("Movie Details : ", movieDetails);

// An Array of your favorite movies 

const favMovies = ["RRR", "RX100", "Kalki", "Salar", "premalu"];

console.log(favMovies);

// An Object representing a movie ticket booking 

const MovieTicketBooking = {
    platform: "BoolMyShow-App",
    location: "Vijaywada",
    movieName: "RRR",
    data: "25/01/2025",
    time: "6:00 PM",
    theaterName: "PVP",
    seat: "A14",
    price: 300,
    bookingStatus: "confirmed",
    BookerDetails: {
        name: "Rajesh",
        phoneNo: "+91 6XXXXXXX17",
        email: "rajeshdummaXXXX@gmail.com"
    },
};

console.log(MovieTicketBooking);

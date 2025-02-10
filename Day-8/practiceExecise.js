
// create movie object with array
 let myMovies = [
    {
        title : "salaar",
        actors : ["Prabas","Prudivi Raj","Poojahedga"],
            rating : 4.5,
            is3D : false
    },

    {
        title : "robo-2",
        actors : ["Rajinikanth","sana","robo"],
        rating : 4.8,
        is3D : true
    },
 ]

 // exercise - 2
// // Create theater object with arrays

let theater = {
    name : "PVP mall",
    screens : ["screen1" , "screen2"],
    facilities : ["AC","Dolby","Atmos"],
    showCount : 5
}
//console.log(myMovies + "\n"+ theater);
//console.log(myMovies , theater);

console.log("myMovies with theater : " , {
    myMovies,
    theater
});

// exercise-3

let movieCards = myMovies.map(movie => `
    <div class="movie-card" >
        <h3>${movie.title}</h3>
        <p>Rating: ${movie.rating}/5</p>
        <p>Actors: ${movie.actors}</p>
        <p>${movie.is3D ? "3D Available" : "2D Only"}</p>
    </div>
 `);
 document.body.innerHTML += movieCards;
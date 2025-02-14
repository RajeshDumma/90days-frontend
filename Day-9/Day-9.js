
// create a movie object with , title , time , seats available

const movie1 = {
    title : "Kalki",
    time : "10AM",
    seats : 60
}
 const movie2 = {
    title : "Pushpa",
    time : "6PM",
    seats : 30
 }
 const movieDiv = document.getElementById('movies');

 //Displying movie details

 movieDiv.innerHTML = `
    <h2>${movie1.title}</h2>
    <p>Time : ${movie1.time}</p>
    <p> Seats : ${movie1.seats}</p>

    <h2>${movie2.title}</h2>
    <p>Time : ${movie2.time}</p>
    <p> Seats : ${movie2.seats}</p>
 `;
// Theater Data
const cinema = {
    name: "PVP Theater",
    location: "Vijayawada, NTR Road",
    screens: 3,
    movies: [
        {
            title: "Sankranthiki Vasthunam",
            shows: ["10:00 AM", "2:00 PM", "6:00 PM"],
            seats: [20, 50, 30],
            image:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNzAuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00418119-urxwxzudkv-portrait.jpg'
        },
        {
            title: "Game Changer",
            shows: ["10:00 AM", "6:00 PM"],
            seats: [40, 20],
            image : 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICA4OUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311772-dyqxbymvgu-portrait.jpg'
        },
        {
            title: "Daaku Maharaaj",
            shows: ["10:00 AM", "2:00 PM", "6:00 PM"],
            seats: [50, 50, 40],
            image : 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA2Mi4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419964-lkjnsvyufh-portrait.jpg'
        },
    ],
};

// Display Movies in the Console
console.log("Theater Name:", cinema.name);
console.log("First Movie:", cinema.movies[0]);
console.log("Second Movie:", cinema.movies[1]);

// Get the container element
let container = document.getElementById("movies");
container.style.background ='lightgray'

// Generate and append movie cards
cinema.movies.map(movie => {

    let card = `
     <div class="col-4">
    <div class="card mb-3">
  <div class="card-body">
  <img src="${movie.image}"/>
    <h5 class="card-title">${movie.title}</h5>
   <div class="shows">
    ${movie.shows.map(time => `
        <button class="btn btn-primary m-2">
            ${time} (${movie.seats[movie.shows.indexOf(time)]} seats)
        </button>
         `).join('')}
   </div>
  </div>
  </div>
</div> `;
container.innerHTML += card ;
});



// Array of actor names
const actors = [
    "Ram Charan",
    "Meena",
    "Rajinikanth",
    "Mammotty",
    "Prabhas",
    "Mrunalthakur",
    "Allu Arjun",
    "NTR",
    "Mahesh Babu",
    "Vijay"
];

// Function to find actors whose names start with a specific initial character

function findActorsByInitial(actors, initial) {

    // Filter actors based the given initial using startsWith()
    
    return actors.filter(actor => actor.startsWith(initial));
}

// Call the function with initial 'M' and store the result
const result = findActorsByInitial(actors, 'M');

// Logging the filtered list of actors
console.log(result); 



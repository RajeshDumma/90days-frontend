
// Array of monies objects
const movies = [
    {
        name: "Sita Ramam",
        price: 200
    },
    {
        name: "RRR",
        price: 300
    },
    {
        name : "Pushpa-2",
        price : 300 
    }
]
const studentInfo = [
    {
        name : "Rajesh",
        age : 22 ,
        grade : 8.12
    },
    {
        name : "Neelima",
        age : 21 ,
        grade : 8.5
    },
    {
        name : "Suma",
        age : 21 ,
        grade : 9.12
    }
]
const mobiles =[
    {
        name : "OPPO",
        price : 20000,
        color : "LightBlue"
    },
    {
        name : "iphone",
        price : 120000,
        color : "Gold"
    },

    {
        name : "VIVO",
        price : 25000,
        color : "silver"
    }
]

console.log(movies);
console.log(studentInfo);
console.log(mobiles);

const myArray = movies.map(element => element[2].color);

console.log(myArray);
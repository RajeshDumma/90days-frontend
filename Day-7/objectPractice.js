
// Object creation 
// 1. creating a movie object (object literal)
const movie1 = {

    name: "Avatar",
    price: 250,
    language: "English"
};
// 2 . creating empty object , then add properties
const movie2 = {};

movie2.name = "Batman";
movie2.price = 180;
movie2.language = "Hindi";
// 3.create object using square bracket notation 
const movie3 = {};
movie3["name"] = "vikram";
movie3["price"] = 230;
movie3["language"] = "Telugu";
// Task-1  create a student object 
const studentInfo = {
    name: "Rajesh",
    age: 22,
    Grade: "S"
};

// another way to create object using empty
const studentInfo1 = {};
studentInfo1.name = "Vishnu";
studentInfo1.age = 23;
studentInfo1.Grade = "B";
studentInfo1.department = "CSE";
// Using array to create onject

const studentInfo2 = {};
studentInfo2["name"] = "Dev";
studentInfo2["age"] = 24;
studentInfo2["grade"] = "A";

// Task-2 mobile phone objects

// creatig object with propertity with values within the {},(object literal)

const mobile1 = {
    name: "oppo",
    price: 18000,
    color: "lightbrown",
    version: "5G , f21 pro"
};

// here creating another way to creat object

const mobile2 = {}; // creating a empty object without propertitys

// adding a propertity with an objectname using (.) notation
mobile2.name = "Redmi";
mobile2.price = 25000;
mobile2.color = "silver";
mobile2.version = "5G , mi pro";

// here creating another way to creat object
const mobile3 = {}; // creating a empty object without propertitys

// adding a propertity with an objectname using array [] 
mobile3["name"] = "iphone";
mobile3["price"] = 150000;
mobile3["color"] = "gold";
mobile3["version"] = "5G,16 pro"




console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log("\n\n")
console.log(studentInfo);
console.log("student : ", studentInfo.Grade); // here I'm print student grade of studentInfo object
console.log(studentInfo1);
console.log("student name : ", studentInfo1.name); //here I'm print student name of studentInfo1 object
console.log(studentInfo2);
console.log(" student age : ", studentInfo2["age"]); // here I'm print student age of studentInfo2 object

console.log(" \n\n ");

console.log(mobile1)
console.log(mobile2)
console.log(mobile3)



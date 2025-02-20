// 1. create array using array literal

const fruits = ["Banana","Apple","Papaya","Grapes","WaterMelon"];
// Another way to create array, empty array , then add elemnts
const fruits1 =[];
fruits1[0] = "orange";
fruits1[1] = "Pinapile";
fruits1[2] = "Mango";
fruits1[3] = "Kivi"
 
// creating an array of 5 colors

const color = ["green","pink","blue","Red"];

const color1 = [];
color1[0] = "Brown";
color1[1] = "Yellow";
color1[2] = "Gray";
color1[3] = "SkyBlue";

const numbers = [10, 80 , 60 , 30 , 50];

const numbers1 = [];

numbers1[0] = 100;
// here i am skpping the index-1
// here showing empty item
numbers1[2] = 300; 
numbers1[4] = 400;

console.log(fruits);
console.log(fruits1);



console.log(color);
console.log(color1);


console.log(numbers);
console.log(numbers1); 
/*
const myArray = numbers.map(items => items.numbers);
console.log(myArray);


const test = ["name","id","grade","Branch"];

const result = test.map(Element => Element.test);

console.log(result);

const test1 = 
[
    {
    name:"Rajesh",
    id : 1234,
    grade : 8.5,
    branch : "CSE"
}
];

const object = test1.map(item => item.test1);

console.log(object);

*/

 // friends name in friends names

 const names =["Srinu" , "Vamsi" ,"Kiran" , " siri","Lucky"];

 const cities = ["kurnool","vijaywada","Guntur","kadapa"];

 const hobby = ["cooking" , "playing-game","watching-movies"];

 console.log(names + "\n" + cities +"\n"+ hobby);
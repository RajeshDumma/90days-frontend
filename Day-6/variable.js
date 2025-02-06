// task - 1

// var keyword used to declare a variable has a functional scope and global scoped behovier.

// Example 


var a = 80;
console.log(a); // output will be 80

var a = 60;  // updated the a value

console.log(a);
console.log(typeof (a)); // number type

var x = 50; // global scope
function print() {
   var square = x * x;
   console.log(square);
}
console.log(x);
print();

function fun() {
   var y = 20; // functional scope
   var mul = y * y;
   console.log(mul);
}
//console.log(y); // here y we didn't declared (error)
fun();


// let kayword has block scope and cannot be redeclared in the same scope

let n = 5;
// let n = 10; showing error we cannot redeclared in same scope
console.log("n = " + n);

let studentName = "Rajesh"; // here variable declared and value insitilazition

console.log("orginal Name : " + studentName);
studentName = "Vamshi"; // here updates the studentName

console.log( "Updated name : "+ studentName);
//let studentName = "Kiran"; 
// error Cannot redeclare block-scoped variable 'studentName'

let name = "Virat";
console.log("another variable : "+name);


// block scope 
if(true){
   let num = 30;
   console.log(num);
}

 // console.log(num) // illegal


// const keyword is fixed , here we cannot redeclared and reassigned

const userName = "Kiran";

console.log(" past name : " + userName);

//userName = "varsha";// error ( Assignment to constant variable.)
console.log(" updated name : " + userName);


// arrayOfObjects in objects we can change content (properties), but we cannot change the variable name.

// Example :

const studentId = {name : "Nithin", age : 22 } ;

console.log(studentId);

studentId.name = "sharma"; // its working here we can change property data
studentId.age = 25;

console.log("updeted objectProperties ");
console.log(studentId);
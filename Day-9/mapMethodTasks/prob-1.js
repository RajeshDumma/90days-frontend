/* Given an array of objects representing students ([{ name: "John", marks: 85 }, ...]), 
use map to create a new array with only names. */
const students = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 92 },
    { name: "Bob", marks: 78 },
    { name: "Emma", marks: 88 },
    { name: "David", marks: 95 },
    { name: "Sophia", marks: 81 },
    { name: "Liam", marks: 89 },
    { name: "Olivia", marks: 76 },
    { name: "Noah", marks: 91 },
    { name: "Mia", marks: 87 }
  ];
  const newArray = students.map(student => student.name);
  console.log(newArray);

  // Task -2 

  
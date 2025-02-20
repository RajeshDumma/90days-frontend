const students = [
    { FirstName: "Rahul", LastName: "Sharma", Age: 21, Branch: "Computer Science" },
    { FirstName: "Ananya", LastName: "Reddy", Age: 21, Branch: "Electronics" },
    { FirstName: "Vikram", LastName: "Singh", Age: 22, Branch: "Mechanical" },
    { FirstName: "Priya", LastName: "Verma", Age: 19, Branch: "Civil" },
    { FirstName: "Amit", LastName: "Das", Age: 23, Branch: "Electrical" },
    { FirstName: "Sanya", LastName: "Kapoor", Age: 23, Branch: "Information Technology" }
];

//console.log(students); // loging the hole student array

// Q-1 : print only firstName and LastName 
const output = students.map(x => x.FirstName + " " + x.LastName);

console.log(output);

// Q-2 : print the age repeting times

// acc : 21 -2 , 22 -1 , 19-1, 23-2

const result = students.reduce(function (acc, curr) {
    if (acc[curr.Age]) {
        ++acc[curr.Age];
    } else {
        acc[curr.Age] = 1;
    }
    return acc ;
}, {}); // initial value of acc empty
console.log(result);

// Q-3 print the FirstNames if age > 20 

const names = students.filter(x => x.Age > 21).map(x => x.FirstName);

console.log(names);

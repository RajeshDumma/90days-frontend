
// Global scope

let courseName = "JavaScript";

function practiceScope(){
    //function scope

    let topic = "Variable";

    console.log(courseName + " - " + topic);
    if(true){
        let detail = "Exploring scopes";
        console.log(detail); // here working because with in the block scope
    }
   // console.log(detail); // here not working , out side of block scope
}

practiceScope()
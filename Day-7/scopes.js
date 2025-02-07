// scopes 

 //  global scope 

 let globalVariable = "I am a global";

 // using Function Scope

 function testFunction(){

    let functionVariable = " I am a function";

    console.log(functionVariable); // function variable
    console.log(globalVariable); // here access global variable
    
 }

 console.log(globalVariable); // it work
 
 testFunction();
 // console.log(functionVariable); // it's not working because it is in a functional scope it can work on within the functional scope


 // Block scope

 if(true){

    let blockVariable = "I am a block";
    const alsoINBlock = "Me too";
    var notActuallyBlocked = "I an escape!";

    console.log(blockVariable) ; // here working
    console.log(alsoINBlock) ; // here working
    console.log(notActuallyBlocked) ;// here working
 }
///  console.log(blockVariable) ; // not working because it can work only within the block
 console.log("outOfScope : " +notActuallyBlocked) ;

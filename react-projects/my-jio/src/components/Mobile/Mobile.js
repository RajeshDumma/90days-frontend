import React from "react";

function Mobile( {a}){
    debugger
console.log( "props",a);
    return(
        <>
        <div>Mobile</div>
        <h1>This is a React Function {a}</h1>
        </>
    )
};

export default Mobile;
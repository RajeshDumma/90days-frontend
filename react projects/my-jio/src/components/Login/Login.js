import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
   const navigate = useNavigate();

 const [Name , captureName] = useState("");

 const[password,capturePassword] = useState("");

      // Function to handle changes in the username input field

    function userName(resevedUserValue){ // automatically called event
        
   //     console.log("Username:",resevedUserValue.target.value);
       captureName(resevedUserValue.target.value);
    }

    function userpassword(resevedUserPassword){
     //   console.log("Password:",resevedUserPassword.target.value);
        capturePassword(resevedUserPassword.target.value);
    }
    function clickButton(){
        console.log(Name , password );
        if(Name === "Rajesh"){
          navigate("/JioHome");
        } else{
          alert("Name is not found");
        }
    }

    return (
      <>
        <label>Username</label>
        {/* Input field for text with onChange event handler */}
        <input type='text' onChange={userName} />  <br/>
        
        <label>Password</label>
        {/* Input field for Password with onChange event handler */}
        <input type='password' onChange={userpassword} />  <br/>
        
        
        <button onClick={clickButton}>Submit</button>
      </>
    )
}

export default Login;

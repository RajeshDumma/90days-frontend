import { useState } from "react";
import React  from 'react';

function SignUp() {

    // useState is a js object

    // creating a useState "  const [state , useState] = useState("");"
     const [userName , updateState] = useState("rajesh");
     const[password , updatePassword] = useState("12345");

  //   console.log(state , "State");
     // Behind the code looking like
     //   state:"rajesh",

    
    function getName(event) {
        console.log("Name" , event.target.value);
        updateState(event.target.value)
    }

    function getPassword(event) {
        console.log("Password",event.target.value);
        updatePassword(event.target.value);
        
    }
    function button(){
      //  console.log(getName , getPassword);
    }

    return (
        <>
            <div className="container container1 mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="right-section right p-4">
                            <h1>Facebook</h1>
                            <form>
                                <input type="text" className="form-control" placeholder="Name" required onChange={getName} />
                                <input type="password" className="form-control" placeholder="Password" required onChange={getPassword} />
                                <button type="submit" className="btn btn-primary btn1" onClick={button}>Log In</button>
                                <a href="#" className="d-block my-2">Forgot password?</a>
                                <hr />
                                <h4>{userName}</h4>
                                <h4>{password}</h4>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    const [login, setLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[comfirmpassword , setconfirmpassword] = useState("")

    function userEmail(event) {
        setEmail(event.target.value);
    }

    function userPassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevents default form submission behavior
        console.log(email, password);

        if (email === "dumma@123.com" && password === "12345") {
            navigate("/Home");
        } else {
            alert("Incorrect Email & Password");
        }
    }
  
    function confPassword(event){
        setconfirmpassword(event.target.value);
    }
     
    function handlesignUp(event){
   event.preventDefault();
   if(password === confPassword){
    navigate("/LoginForm");
   }else{
    alert("check ConformPassword");
   }
    }

    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={login ? 'active' : ""} onClick={() => setLogin(true)}>Login</button>
                    <button className={!login ? 'active' : ""} onClick={() => setLogin(false)}>SignUp</button>
                </div>

                {login ? (
                    <form className='form' onSubmit={handleSubmit}>
                        <h2>Login Form</h2>
                        <input type='email' placeholder='Email' required onChange={userEmail} value={email} />
                        <input type='password' placeholder='Password' required onChange={userPassword} value={password} />
                        <a href='#'>Forgot password</a>
                        <button type="submit">Submit</button> 
                        <p>Not a Member? <a href='#' onClick={() => setLogin(false)}>Sign Up now</a></p>
                    </form>
                ) : (
                    <form className='form' onSubmit={handlesignUp}> 
                        <h2>SignUp Form</h2>
                        <input type='email' placeholder='Email' required onChange={userEmail} value={email} />
                        <input type='password' placeholder='Password' required onChange={userPassword} value={password} />
                        <input type='password' placeholder='Confirm Password' required onChange={confPassword} value={comfirmpassword}/>
                        <button type="submit">Sign Up</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default LoginForm;

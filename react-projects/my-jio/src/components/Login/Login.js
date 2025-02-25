import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");

  function userName(event) {
    setName(event.target.value);
  }

  function userPassword(event) {
    setPassword(event.target.value);
  }

  function clickButton(event) {
    event.preventDefault(); // Prevent page refresh

    console.log("Entered:", Name, password);
    if (Name === "Rajesh" && password === "12345") {
      alert("Login Successful!");
      localStorage.setItem("isAuthenticated", "true"); // Store login status
      navigate("/JioHome"); // Redirect to JioHome after login
    } else {
      alert("Invalid Credentials!");
    }
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={clickButton}>
        <label>Username</label>
        <input type='text' className="form-control" onChange={userName} required />
        <br />
        
        <label>Password</label>
        <input type='password' className="form-control" onChange={userPassword} required />
        <br />
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;

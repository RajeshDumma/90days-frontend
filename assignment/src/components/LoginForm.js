import axios from "axios";
import React, { useState } from "react";
import "./LoginForm.css"; // Import CSS file

const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    gmail: "",
    password: "",
    confirmPassword: "",
  });
  const { username, gmail, password, confirmPassword } = user;

  const [errors, setErrors] = useState({
    username: "",
    gmail: "",
    password: "",
    confirmPassword: "",
  });

  //const {username,gmail,password,confirmPassword} = errors;

  const userChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    let valid = true;
    let newErrors = { username: "", gmail: "", password: "", confirmPassword: "" };

    // Validate Username (At least 6 characters, first letter capital, contains number & special character)
    const usernameMust = /^[A-Z][A-Za-z0-9@#$%^&*]{5,}$/;
    if (!usernameMust.test(username)) { //test() is a method used with regular expressions (RegExp) in JavaScript.
      newErrors.username = "Username must start with a capital letter, be at least 6 chars, and include a number & special char.";
      valid = false;
    }

    // Validate Email (@gmail.com)
    if (!gmail.endsWith("@gmail.com")) { //endsWith() is a JavaScript string method that checks whether a string ends with a specified substring.
      newErrors.gmail = "Email must end with @gmail.com";
      valid = false;
    }

    // Validate Password (Uppercase, lowercase, special char, and not equal to username)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password = "Password must be at least 6 chars, include uppercase, lowercase, number & special character.";
      valid = false;
    }
    if (password === username) {
      newErrors.password = "Password cannot be the same as username.";
      valid = false;
    }

    // Validate Confirm Password (Should match password)
    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Confirm password does not match.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const userSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return; // Stop submission if validation fails

    console.log(user);

    // API call to store user data
    try {
      const response = await axios.post(
        "https://reactlearning-d3d23-default-rtdb.firebaseio.com/users.json",
        user
      );
      console.log("Data saved successfully:", response.data);
      alert("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error saving data");
    }
  };

  return (
    <>
      <form onSubmit={userSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={username} onChange={userChanges} required />
        {errors.username ? <p className="error">{errors.username}</p> : null}


        <label>Email</label>
        <input type="email" name="gmail" value={gmail} onChange={userChanges} required />
        {errors.gmail ? <p className="error">{errors.gmail}</p>:null}

        <label>Password</label>
        <input type="password" name="password" value={password} onChange={userChanges} required />
        {errors.password ? <p className="error">{errors.password}</p>:null}

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={userChanges} required />
        {errors.confirmPassword ? <p className="error">{errors.confirmPassword}</p>:null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LoginForm;

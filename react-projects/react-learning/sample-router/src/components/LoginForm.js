import React, { useState } from 'react'

const LoginForm = () => {

    const [user, setUser] = useState({
        userName: '',
        password: '',
    });
    const { userName, password } = user;
    const formHandler = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    const submitHandler = e =>{
     e.preventDefault();
     console.log(user);
    }
    return (
        <>
            <form  onSubmit={submitHandler}>
                <h1>LoginForm</h1>
                <input type='userName' name='userName' value={userName} onChange={formHandler} /> <br />
                
                <input type='password' name='password' value={password} onChange={formHandler} /><br />
              
                <button type='submit'>Submit</button>
            
            </form>

        </>

    )
}
export default LoginForm;
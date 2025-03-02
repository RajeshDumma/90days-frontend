import React ,{useState}from 'react'



const SignUp = () => {
    
   // using useState
    const [userdata , setUserData] = useState({
        username:'',
        Email:'',
        password:'',
        confirmPassword:'',
    })
  const {username,Email,password,confirmPassword}= userdata;
  const userHandler = e => {
    setUserData({...userdata,[e.target.name] : e.target.value});
  }
  const submitHandler = e =>{
    e.preventDefault();
    if(username.length <= 5){
        alert("username name must be at least 6 character");
    } else if (password !== confirmPassword){
        alert("password are not maching");
    } else{
        console.log(userdata);
    }
  }
  return (
   <>
   <form onSubmit={submitHandler}>
    <h1>SignUp Form</h1>
   <input type='username' name='username' value={username} placeholder='username' onChange={ userHandler} /> <br/>
   <input type='Email' name='Email' value={Email} placeholder='Email' onChange={ userHandler} /> <br/>
   <input type='password' name='password' value={password}  placeholder='password' onChange={ userHandler} /> <br/>
   <input type='Password' name='confirmPassword' value={confirmPassword} placeholder='confirmPassword' onChange={ userHandler} /> <br/>
   {password !== confirmPassword ? <p style={{color:"red"}}>Password are not matched</p>:null}
   <button type='submit'>Submit</button>
   </form>
   </>
  )
}

export default SignUp
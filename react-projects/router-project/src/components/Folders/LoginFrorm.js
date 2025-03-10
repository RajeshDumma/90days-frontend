import React, { useState } from 'react'

const LoginFrorm = () => {
    const[user , setUser] = useState({
        usename:'',
        password:''
    });
    const {usename , password} = user;
    const handeler = Event => {
        setUser({...user,[Event.target.name] : Event.target.value})
    }
  return (
    
    <>
    <form>
        <input type='text' name='username' value={usename} onChange={handeler} />
        <input type='password' name='password' value={password} onChange={handeler}/>
        <button>Submit</button>
    </form>
    </>
  )
}

export default LoginFrorm
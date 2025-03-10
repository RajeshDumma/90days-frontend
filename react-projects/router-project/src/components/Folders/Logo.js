import React, { useState } from 'react'

const Logo = () => {
  const[user , setUser] = useState({
          username:'',
          password:''
      });
      const {username , password} = user;
      
      function handeler ( Event) {
      console.log( setUser({...user,[Event.target.name] : Event.target.value}) )
      }
       const submitForm = e =>{
        e.preventDefault();
        console.log(user);
       }

      /*  const arr =[1,2,3,4,5];
       const arr2 = [...arr , 6,7,8,9,];
       console.log(arr2); */
       
  return (
    <>
    <form onSubmit={submitForm}>
        <input type='text' name='username' value={username} onChange={handeler} />
        <input type='password' name='password' value={password} onChange={handeler}/>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Logo
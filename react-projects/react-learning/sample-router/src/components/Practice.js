/* import React, { useState } from 'react'

const Practice = () => {
    const [user , setUpdateUser] = useState({
        username :'',
        password:'',

        type :'',
        name:'',
        classs:'',
        section:'',
        date:'',
    });
    const {username , password ,type,name,classs,section , data} = user;
    const userHandler = e => {
      setUpdateUser({...user,[e.target.name]:e.target.value});
    }
  return (
   <>
   <label>username</label>
   <input type='text' name='name' value={username} onChange={userHandler}/> 
   <label> userName</label>
   <input type='password' name='name' value={password}/>

   <h1>Name</h1>
   <label>type</label>
   <input type='text' name='type' value={type} onChange={userHandler}/>  <br/>
   <label> name</label>
   <input type='text' name='name' value={name}/>

   <label>Class</label>
   <input type='text' name='class' value={classs} onChange={userHandler}/> 
   <label> Section</label>
   <input type='text' name='section' value={section}/>
   <label>Data</label>
   <input type='text' name='data' value={data} onChange={userHandler}/> 
   
   </>
  )
}

export default Practice */ 
import React, { useState } from 'react';


function Practice() {
  const [adhocData, setAdhocData] = useState([]);
  const [emails, setEmails] = useState([]);

  const addAdhoc = () => {
    setAdhocData([...adhocData, { type: '', name: '', class: '', section: '', data: '' }]);
  };

  const removeAdhoc = (index) => {
    const newAdhoc = adhocData.filter((_, i) => i !== index);
    setAdhocData(newAdhoc);
  };

  const addEmail = () => {
    setEmails([...emails, { email: '' }]);
  };

  const removeEmail = (index) => {
    const newEmails = emails.filter((_, i) => i !== index);
    setEmails(newEmails);
  };

  return (
    <div>
      <h2>Name</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      <h3>Adhoc Data</h3>
      {adhocData.map((item, index) => (
        <div key={index} className="row">
          <input type="text" placeholder="Type" />
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Class" />
          <input type="text" placeholder="Section" />
          <input type="text" placeholder="Data" />
          <button onClick={() => removeAdhoc(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addAdhoc}>Add Adhoc</button>

      <h3>HR Data</h3>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Middle Name" />
      <input type="text" placeholder="Last Name" />
      <button>Add Address</button>

      {emails.map((item, index) => (
        <div key={index} className="row">
          <input type="email" placeholder="Email" />
          <button onClick={() => removeEmail(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addEmail}>Add Email</button>
    </div>
  );
}

export default Practice;
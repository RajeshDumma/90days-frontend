import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './Discuss.css'

const activeClassName = ({ isActive }) => (isActive ? "active-sub-link" : "");

const Discuss = () => {
  const navigate = useNavigate();
  console.log(typeof(navigate));
  const goToHome= async () => {  
    await new Promise((resolve) => setTimeout(resolve,3000))        
    navigate("/Home")
  };  /* navigate some delay */
  /* navigate (0,-1,+1) here delta = 0 {current page refresh}, +1 {back} 
 , +1 {forward} */
  return (
    <>
      <div>
        <nav className='sub-navbar'>
          <NavLink to="/discuss/interview-experience" className={activeClassName}>
            Interview Experience
          </NavLink>
          <NavLink to="/discuss/interview-question" className={activeClassName}>
            Interview Question
          </NavLink>
        </nav>
     
     
      {/* Child route */}
      <Outlet />
      </div>
      <button className='btn mt-4 bg-success text-white' onClick={goToHome}>Navigate to Home</button>
    </>
  )
}

export default Discuss

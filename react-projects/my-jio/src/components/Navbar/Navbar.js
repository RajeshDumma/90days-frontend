import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isAuthenticated"); // Clear login status
    navigate("/"); // Redirect to login
  }

  return (
    <nav>
      <ul>
        <li><Link to="/JioHome">Home</Link></li>
        <li><Link to="/Mobile">Mobile</Link></li>
        <li><Link to="/True5g">True 5G</Link></li>
        <li><Link to="/JioFiber">Jio Fiber</Link></li>
        <li><Link to="/SignUp">Sign Up</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li> {/* Logout Button */}
      </ul>
    </nav>
  );
}

export default Navbar;

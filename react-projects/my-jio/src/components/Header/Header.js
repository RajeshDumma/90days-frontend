import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import JioHome from '../JioHome/JioHome';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/jioHome" className="navbar-brand" href="#">JioHome</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="Mobile" className="nav-link active" aria-current="page">Mobile</Link>
              </li>
              <li className="nav-item">
                <Link to="True5g" className="nav-link">True5G</Link>
              </li>
              <li className="nav-item">
                <Link to="JioFiber" className="nav-link">JioFiber</Link>
              </li>
              
              <li className="nav-item">
                <Link to="SignUp" className="nav-link">SignUp</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

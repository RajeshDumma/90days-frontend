import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css' // Make sure CSS is imported

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid nav-item">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav gap-5">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">Logo</Link>
              </li>
              <li className="nav-item">
                <NavLink to={"/home"} className= /* {({ isActive }) => isActive ? "nav-link active-link"  :"nav-link" } */ "nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/dashboard"} className="nav-link">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/about"} className="nav-link"
                 /*  className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                  style={({ isActive }) => isActive ? { color: 'red' } : {}} */
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/discuss",
                    search: "?top-interview",
                    hash: "#test"
                  }}
                  replace
                  className="nav-link"
                >
                  Discuss
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"} className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

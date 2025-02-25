import React from "react";
import { FaUser , FaGooglePlay , FaApple } from "react-icons/fa";
import Home from "./Home/Home";


function Header() {

    return (
        <>
               <header>
               <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-main">
                    <div class="container-fluid">
                       <img className="header-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiBQ7IJRVSbpbRue9FMrhT5s6JUPujKxBvIw&s"/>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav nav-content">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Movies</a>
                                <a class="nav-link" href="#">Theates</a>
                            </div>
                            <div className="right-nav">
                            <button type="button"class="btn btn-outline-primary btn-m">Log in/ signup <FaUser /></button>
                            <span class="icons rounded-circle"><FaGooglePlay /></span>
                            <span class="icons rounded-circle"><FaApple /></span>
                            </div>
                        </div>
                    </div>
                </nav>
               </header>
        </>
    )
};

export default Header;
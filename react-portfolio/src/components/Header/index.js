import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-forest-green">
            <div className="container">
                <h1><Link to="/Intro"><span className="navbar-brand text-white">Larry Gamboa<span className="mytitle">Web Designer &amp; Developer</span></span></Link></h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/Intro"><span className="nav-link">Introduction <span className="sr-only">(current)</span></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Portfolio"><span className="nav-link">Portfolio</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact"><span className="nav-link">Contact</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderNav;

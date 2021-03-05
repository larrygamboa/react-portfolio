import React from "react";
import "./style.css";

const headerNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-forest-green">
            <div className="container">
                <h1><a className="navbar-brand text-white" href="index.html">Larry Gamboa<span className="mytitle">Web Designer &amp; Developer</span></a></h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">Introduction <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="portfolio.html">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default headerNav;

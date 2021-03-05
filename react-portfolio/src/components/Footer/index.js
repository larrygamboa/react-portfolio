import React from "react";
import "./style.css";

const footer = () => {
    return (
        <footer className="bg-forest-green pt-4">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="mb-4"><a href="index.html">Introduction</a> | <a href="portfolio.html">Portfolio</a> | <a href="contact.html">Contact</a></p>
                        <p><strong>Created by Larry Gamboa</strong></p>
                        <p><small>&copy; 2021 Larry Gamboa</small></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer;

import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
    return (
        <footer className="bg-forest-green pt-4">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="mb-4"><Link to="/Intro">Introduction</Link> | <Link to="/Portfolio">Portfolio</Link> | <Link to="/Contact">Contact</Link></p>
                        <p className="create"><strong>Created with <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a> and <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a> by <a href="https://github.com/larrygamboa" target="_blank" rel="noreferrer">Larry Gamboa</a></strong></p>
                        <p><small>&copy; 2021 Larry Gamboa</small></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer;

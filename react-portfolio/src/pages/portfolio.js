import React from "react";
import Aside from "../components/Aside";
import employeedirectory from "../images/portfolio-employee-directory-thumb.jpg";
import fitnesstracker from "../images/portfolio-fitness-tracker-thumb.jpg";
import expresshandlebars from "../images/portfolio-express-handlebars-thumb.jpg";
import employeetracker from "../images/portfolio-employee-tracker-thumb.jpg";
import notetaker from "../images/portfolio-note-taker-thumb.jpg";
import teamgenerator from "../images/portfolio-team-generator-thumb.jpg";
import readmegenerator from "../images/portfolio-readme-generator-thumb.jpg";
import dayplanner from "../images/portfolio-day-planner-thumb.jpg";
import caniglia from "../images/portfolio-caniglia-thumb.jpg";
import pacific from "../images/portfolio-pacific-thumb.jpg";
import petcohome from "../images/portfolio-petco-thumb.jpg";
import petconutrition from "../images/portfolio-nutrition-thumb.jpg";
import "../App.css";

const portfolio = () => {
    return (
        <div id="main-content">
            <div className="container bg-white">
                <div className="row">
                    <div className="col-lg-9 col-xlg-9 p-4">
                        <h2>Portfolio</h2>
                        <hr />
                        <p>Here are some examples of my current and past work. I've added some applications developed in the Full Stack Web Development program with UC San Diego Extension. I've also designed and built numerous websites throughout my 10+ year career which include corporate, medical, law and small business. You can preview more of my design work on <a href="https://www.behance.net/larrygamboa" target="_blank" rel="noreferrer">Behance</a>.</p>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 p-3 text-center">
                                <div className="card">
                                    <img src={employeedirectory} alt=" " className="img-fluid rounded mx-auto d-block" />
                                    <h5 className="mt-3 mb-3"><strong>Employee Directory using React</strong></h5>
                                    <p><a href="https://larrygamboa.github.io/employee-directory/" target="_blank" rel="noreferrer">Preview &rarr;</a></p>
                                    <p><a href="https://github.com/larrygamboa/employee-directory" target="_blank" rel="noreferrer">GitHub Repo &rarr;</a></p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 p-3 text-center">
                                <div className="card">
                                    <img src={fitnesstracker} alt=" " className="img-fluid rounded mx-auto d-block" />
                                    <h5 className="mt-3 mb-3"><strong>Fitness Tracker</strong></h5>
                                    <p><a href="https://morning-dawn-77684.herokuapp.com/" target="_blank" rel="noreferrer">Preview &rarr;</a></p>
                                    <p><a href="https://github.com/larrygamboa/fitness-tracker" target="_blank" rel="noreferrer">GitHub Repo &rarr;</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 p-3 text-center">
                                <div className="card">
                                    <img src={expresshandlebars} alt=" " className="img-fluid rounded mx-auto d-block" />
                                    <h5 className="mt-3 mb-3"><strong>Node Express Handlebars</strong></h5>
                                    <p><a href="https://salty-oasis-54918.herokuapp.com/" target="_blank" rel="noreferrer">Preview &rarr;</a></p>
                                    <p><a href="https://github.com/larrygamboa/node-express-handlebars" target="_blank" rel="noreferrer">GitHub Repo &rarr;</a></p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 p-3 text-center">
                                <div className="card">
                                    <img src={employeetracker} alt=" " className="img-fluid rounded mx-auto d-block" />
                                    <h5 className="mt-3 mb-3"><strong>Employee Tracker</strong></h5>
                                    <p><a href="https://drive.google.com/file/d/1GajnjWgNkObedsbb7IKGsOCM-BA1pvw-/view" target="_blank" rel="noreferrer">Preview &rarr;</a></p>
                                    <p><a href="https://github.com/larrygamboa/employee-tracker" target="_blank" rel="noreferrer">GitHub Repo &rarr;</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 p-3 text-center">
                                <div className="card">
                                    <img src={notetaker} alt=" " className="img-fluid rounded mx-auto d-block" />
                                    <h5 className="mt-3 mb-3"><strong>Note Taker</strong></h5>
                                    <p><a href="https://boiling-sands-71851.herokuapp.com/" target="_blank" rel="noreferrer">Preview &rarr;</a></p>
                                    <p><a href="https://github.com/larrygamboa/note-taker" target="_blank" rel="noreferrer">GitHub Repo &rarr;</a></p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 p-3 text-center">
                                <div className="card">
                                    <img src={teamgenerator} alt=" " className="img-fluid rounded mx-auto d-block" />
                                    <h5 className="mt-3 mb-3"><strong>Team Generator</strong></h5>
                                    <p><a href="https://drive.google.com/file/d/1LJeSG-eqHl89O_qFHLQmPsA2dDfGSY9S/view" target="_blank" rel="noreferrer">Preview &rarr;</a></p>
                                    <p><a href="https://github.com/larrygamboa/team-generator" target="_blank" rel="noreferrer">GitHub Repo &rarr;</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 p-3 text-center">
                                <div className="card">
                                    <img src={readmegenerator} alt=" " className="img-fluid rounded mx-auto d-block" />
                                    <h5 className="mt-3 mb-3"><strong>ReadMe Generator</strong></h5>
                                    <p><a href="https://drive.google.com/file/d/1MXMG7GiE4UewcFGNqAWiU05Gq3eioKAq/view" target="_blank" rel="noreferrer">Preview &rarr;</a></p>
                                    <p><a href="https://github.com/larrygamboa/professional-readme-generator" target="_blank" rel="noreferrer">GitHub Repo &rarr;</a></p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 p-3 text-center">
                                <div className="card">
                                    <img src={dayplanner} alt=" " className="img-fluid rounded mx-auto d-block" />
                                    <h5 className="mt-3 mb-3"><strong>Day Planner</strong></h5>
                                    <p><a href="https://larrygamboa.github.io/homework-5-day-planner/" target="_blank" rel="noreferrer">Preview &rarr;</a></p>
                                    <p><a href="https://github.com/larrygamboa/homework-5-day-planner" target="_blank" rel="noreferrer">GitHub Repo &rarr;</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 p-3 text-center">
                                <div className="card">
                                    <img src={caniglia} alt=" " className="img-fluid rounded mx-auto d-block" />
                                    <h5 className="mt-3 mb-3"><strong>Client website redesign</strong></h5>
                                    <p><a href="https://www.behance.net/gallery/100182867/Caniglia-Facial-Plastic-Surgery-homepage-design" target="_blank" rel="noreferrer">Preview &rarr;</a></p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 p-3 text-center">
                                <div className="card">
                                    <img src={pacific} alt=" " className="img-fluid rounded mx-auto d-block" />
                                    <h5 className="mt-3 mb-3"><strong>Client website redesign</strong></h5>
                                    <p><a href="https://www.behance.net/gallery/100182757/Pacific-Plastic-Surgery-homepage-design" target="_blank" rel="noreferrer">Preview &rarr;</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 p-3 text-center">
                                <div className="card">
                                    <img src={petcohome} alt=" " className="img-fluid rounded mx-auto d-block" />
                                    <h5 className="mt-3 mb-3"><strong>Petco Summer Homepage</strong></h5>
                                    <p><a href="https://www.behance.net/gallery/103279859/Summer-event-homepage" target="_blank" rel="noreferrer">Preview &rarr;</a></p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 p-3 text-center">
                                <div className="card">
                                    <img src={petconutrition} alt=" " className="img-fluid rounded mx-auto d-block" />
                                    <h5 className="mt-3 mb-3"><strong>Petco Nutrition Landing Page</strong></h5>
                                    <p><a href="https://www.behance.net/gallery/99965021/landing-page" target="_blank" rel="noreferrer">Preview &rarr;</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xlg-3 p-4">
                        <Aside />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default portfolio;

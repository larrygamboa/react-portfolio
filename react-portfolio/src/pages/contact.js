import React from "react";
import "../App.css";

const contact = () => {
    return (
        <div id="main-content">
            <div className="container bg-white">
                <div className="row">
                    <div className="col-lg-9 col-xlg-9 p-4">
                        <h2>Contact</h2>
                        <hr />
                        <p>To contact me about my services, please fill out the form below. All fields are required.</p>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputName1">Name</label>
                                <input type="name" className="form-control" id="exampleInputName1" />
                            </div>
                            <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlSelect1">Select a Topic</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                <option>Make your selection...</option>
                                <option>Print Design</option>
                                <option>Web Design</option>
                                <option>Web Development</option>
                                <option>Pricing</option>
                                <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-3 col-xlg-3 p-4">
                        <h2>Let's Connect</h2>
                        <hr />
                        <ul className="connect">
                            <li><a href="https://www.linkedin.com/in/gamboalarry/" target="_blank">LinkedIn &rarr;</a></li>
                            <li><a href="https://github.com/larrygamboa/" target="_blank">GitHub &rarr;</a></li>
                            <li><a href="https://www.behance.net/larrygamboa" target="_blank">Behance &rarr;</a></li>
                            <li><a href="https://www.instagram.com/capturesbylg/" target="_blank">Instagram &rarr;</a></li>
                            <li><hr /></li>
                            <li><a href="mailto:techmedia.lg@gmail.com">techmedia.lg@gmail.com</a></li>
                            <li>858.275.3161</li>
                            <li><hr /></li>
                            <li><a href="../images/larry_gamboa_2021resume_updated012021.pdf" target="_blank"><button type="button" className="btn btn-primary mb-3">Download Resum&eacute;</button></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact;

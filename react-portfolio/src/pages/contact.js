import React from "react";
import Aside from "../components/Aside";
import "../App.css";

const contact = () => {
  return (
    <div id="main-content">
      <div className="container bg-white">
        <div className="row">
          <div className="col-lg-9 col-xlg-9 p-4">
            <h2>Contact</h2>
            <hr />
            <p>
              To contact me about my services, please fill out the form below.
              All fields are required.
            </p>
            <p className="small">* = required fields</p>
            <form>
              <div className="form-group">
                <label for="name">Name *</label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                />
              </div>
              <div className="form-group">
                <label for="fromMail">Email *</label>
                <input
                  type="email"
                  className="form-control"
                  id="fromMail"
                />
              </div>
              <div className="form-group">
                <label for="selectTopic">Select a Topic *</label>
                <select className="form-control" id="selectTopic">
                  <option>Make your selection...</option>
                  <option>Print Design</option>
                  <option>Web Design</option>
                  <option>Web Development</option>
                  <option>Pricing</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label for="inputMessage">Message *</label>
                <textarea
                  className="form-control"
                  id="inputMessage"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-3 col-xlg-3 p-4">
            <Aside />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;

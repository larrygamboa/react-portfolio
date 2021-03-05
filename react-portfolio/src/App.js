import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderNav from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Intro from "./pages/aboutme";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import './App.css';

function App() {
  return (
    <Router>
      <HeaderNav />
      <Project>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Project>
      <Footer />
    </Router>
  );
}

export default App;

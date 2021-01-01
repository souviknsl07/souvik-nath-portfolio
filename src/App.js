import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
          <Route path="/">
            <Navbar />
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Home';
import Menu from './Components/Menu';
import About from './Components/About';
import NavBar from './NavBar';

class Routes extends Component {
  render() {
    return (
        <Router>
          <NavBar />
          <div>
            <hr />
            <Route name="Home" exact path="/" component={Home} />
            <Route name="Menu" path="/menu" component={Menu} />
            <Route name="About" path="/about" component={About} />
          </div>  
        </Router>
      
    );
  }
}

export default Routes;
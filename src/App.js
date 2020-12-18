import Routes from './Routes';
import './App.css';
import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Routes />
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Menu</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
              
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
}

export default App;

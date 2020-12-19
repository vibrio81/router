import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';



class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Lotteria</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="Link">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
      
    );
  }
}
export default NavBar;
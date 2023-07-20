import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './navbar.css';

import logo from '../../assets/navbar/Sigla_ACS.png';

function MyNavbar() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="Sigla ACS" className="navbar-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar-links">
            <Nav.Link className="navbar-link1" href="#text1">Home</Nav.Link>
            <Nav.Link className="navbar-link2" href="#text2">Insight Materii</Nav.Link>
            <Nav.Link className="navbar-link3" href="#text3">Drive</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="navbar-contact" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
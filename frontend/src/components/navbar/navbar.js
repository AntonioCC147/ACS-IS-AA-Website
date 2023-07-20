import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './navbar.css';

import logo from '../../assets/navbar/Sigla_ACS.png';

function MyNavbar() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="Sigla ACS" className="navbar-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar-links">
            <Nav.Link className="navbar-link1" href="/">Home</Nav.Link>
            <Nav.Link className="navbar-link2" href="/materii">Insight Materii</Nav.Link>
            <Nav.Link className="navbar-link3" target="blank" href="https://drive.google.com/drive/folders/1eMQ8SWBM3jM8GEOB7-n3FvW93oXZtg1Z?usp=drive_link">Drive</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="navbar-contact" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
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
            <Nav.Link className="navbar-link1" href="/" style={{marginLeft: "100px"}}><div className="centrat">Home</div></Nav.Link>
            <Nav.Link className="navbar-link2" href="/materii" style={{marginLeft: "100px"}}>Insight Materii</Nav.Link>
            <Nav.Link className="navbar-link3" target="blank" href="https://drive.google.com/drive/folders/1eMQ8SWBM3jM8GEOB7-n3FvW93oXZtg1Z?usp=sharing" style={{marginLeft: "100px"}}>Drive</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="navbar-contact centerButton" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
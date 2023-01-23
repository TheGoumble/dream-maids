import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import "./header.css"
import logo from "./../../images/logo.png"

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" id="navbar-brand">
            <img src={logo} alt="Dream Maids Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="our-services">Our Services</Nav.Link>
              <Nav.Link href="about-us">About Us</Nav.Link>
              <Nav.Link href="contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

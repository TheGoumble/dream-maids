import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import "./header.css"
import facebook from "../../images/facebook-144.png"
import yelp from "../../images/yelp-144.png"
import logo from "./../../images/logo.png"

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img className="img" src={logo} alt="Dream Maids Logo" />
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
      <div id="">
        <a href="https://www.yelp.com/biz/dream-maids-cleaning-services-greenacres">
          <img
            className="img"
            src={yelp}
            alt="Link to Dream maids' yelp page"
          />
        </a>
        <a href="https://www.facebook.com/dreammaidspalmbeach/">
          <img
            className="img"
            src={facebook}
            alt="Link to Dream maids' facebook page"
          />
        </a>
      </div>
    </header>
  )
}

export default Header

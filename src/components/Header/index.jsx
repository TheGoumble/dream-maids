import React from "react"
import { Navbar, Container, Nav, Offcanvas, Link } from "react-bootstrap"

import "./header.css"
import call from "../../images/call.png"
import facebook from "../../images/facebook-logo.svg"
//https://www.facebook.com/dreammaidspalmbeach/
import yelp from "../../images/yelp-logo.svg"
//https://www.yelp.com/biz/dream-maids-cleaning-services-greenacres
import logo from "./../../images/logo.png"

const Header = () => {
  return (
    <header>
      <div id="sun"></div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <h1>
              Dream Maids
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />

          <Navbar.Collapse id="navbar">
            <Nav className="me-auto" style={{ maxHeight: "100%" }}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about-us">About Us</Nav.Link>
              <Nav.Link href="contact-us">Contact Us</Nav.Link>
              <Nav.Link href="tel:+1 (561) 287-0358">
                <img id="call" src={call} alt="call now" />
                Call Now
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

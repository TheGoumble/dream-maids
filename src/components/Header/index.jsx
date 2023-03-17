import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

import "./header.css"
import call from "../../images/call.png"
import facebook from "../../images/facebook-logo.svg"
import yelp from "../../images/yelp-logo.svg"
import logo from "./../../images/logo.png"

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container className="justify-content-start">

          <Navbar.Toggle aria-controls="navbar" />

          <Navbar.Brand href="/">
            {/* <img className="img" src={logo} alt="Dream Maids Logo" /> */}
            <h1>Dream Maids</h1>
          </Navbar.Brand>

          <Navbar.Collapse id="navbar">
            <Nav className="me-auto" style={{ maxHeight: "100%" }}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="our-services">Our Services</Nav.Link>
              <Nav.Link href="about-us">About Us</Nav.Link>
              <Nav.Link href="contact-us">Contact Us</Nav.Link>
              <Nav.Link href="tel:+(561) 287-0358">
                <img id="call" src={call} alt="call now" />
                Call Now
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <a
          href="https://www.yelp.com/biz/dream-maids-cleaning-services-greenacres"
          target="_blank"
        >
          <img
            className="img"
            src={yelp}
            alt="Link to Dream maids' yelp page"
          />
        </a>
        <a href="https://www.facebook.com/dreammaidspalmbeach/" target="_blank">
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

import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"

import "./header.css"
import call from "../../images/call.png"
import facebook from "../../images/facebook-144.png"
import yelp from "../../images/yelp-144.png"
import logo from "./../../images/logo.png"

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="mb-3">
        <Container className="justify-content-start" fluid>
          <Navbar.Brand href="/">
            <img className="img" src={logo} alt="Dream Maids Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <img className="img" src={logo} alt="Dream Maids Logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="our-services">Our Services</Nav.Link>
                <Nav.Link href="about-us">About Us</Nav.Link>
                <Nav.Link href="contact-us">Contact Us</Nav.Link>
                <Nav.Link href="tel:+(561) 287-0358">
                  <img id="call" src={call} alt="call now" /> Call Now
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
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

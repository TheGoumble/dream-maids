import React from "react"
import { Navbar, Container, Nav, Offcanvas, Link } from "react-bootstrap"

import "./header.css"
import call from "../../images/call.png"
import facebook from "../../images/facebook-logo.svg"
//https://www.facebook.com/dreammaidspalmbeach/
import yelp from "../../images/yelp-logo.svg"
//https://www.yelp.com/biz/dream-maids-cleaning-services-greenacres
import logo from "./../../images/logo.png"
import cloud from "./../../images/cloud.svg"
import cloud_2 from "./../../images/cloud_2.svg"

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" id="sun">
            <h2>Dream Maids</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />

          <Navbar.Collapse id="navbar">
            <Nav className="me-auto" style={{ maxHeight: "100%" }}>
              <div className="cloud-container">
                <img src={cloud} className="cloud" />
                <Nav.Link href="/">
                  <h5 className="nav-text">Home</h5>
                </Nav.Link>
              </div>

              <div className="cloud-container">
                <img src={cloud_2} className="cloud" />
                <Nav.Link href="about-us">
                  <h5 className="nav-text">About Us</h5>
                </Nav.Link>
              </div>

              <div className="cloud-container">
                <img src={cloud} className="cloud" />
                <Nav.Link href="contact-us">
                  <h5 className="nav-text">Contact Us</h5>
                </Nav.Link>
              </div>

              <div className="cloud-container">
                <img src={cloud_2} className="cloud" />
                <Nav.Link href="tel:+1 (561) 287-0358">
                  <h5 className="nav-text">Call Now</h5>
                  <img src={call} alt="call now" id="call-img" />
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

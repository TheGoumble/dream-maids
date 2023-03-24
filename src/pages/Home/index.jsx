import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"

import BookNow from "../../components/BookNow"
import service_1 from "../../images/residential.png"
import service_2 from "../../images/comercial.png"
import service_3 from "../../images/post-construction.png"

import img_1 from "../../images/img_1.jpeg"

import "./home.css"
import MobileCaro from "./MobileCaro.jsx"

const Home = () => {
  return (
    <Container>
      <Row className="outer" id="home">
        <Col id="contact">
          <img src={img_1} alt="people cleaning a room" id="contact_img" />
          <h1>Dream Maids </h1>
          <span>
            <h3>
              We take pride in our efficient and accessible all-day support to
              provide you with help for any questions and needs.
            </h3>
            <span>
              <BookNow />
              <p className="h4">or</p>
              <Button href="tel:+(561) 287-0358" variant="secondary">
                Call Us
              </Button>
            </span>
          </span>
        </Col>

        <Col id="services" className="outer">
          <h2>Our Services</h2>

          <MobileCaro />

          <Row id="rowed">
            <Col className="service-cards" lg md>
              <h3>Residential</h3>
              <img src={service_1} alt="the residential service" />
              <Button href="our-services">Learn More</Button>
            </Col>

            <Col className="service-cards" lg md>
              <h3>Comercial</h3>
              <img src={service_2} alt="the Comercial service" />
              <Button href="our-services">Learn More</Button>
            </Col>

            <Col className="service-cards" lg md>
              <h3>Post-Construction</h3>
              <img src={service_3} alt="the Post-Construction service" />
              <Button href="our-services">Learn More</Button>
            </Col>
          </Row>
        </Col>
        <Col className="outer" id="aboutus">
          <span>
            <h2>Bringing peace into people’s homes for 15 years</h2>
            <span>
              <p>
                A journey into one woman’s dream to begin a business now a
                business that strives to reach the homes and hearts of many.
              </p>
              <Button href="about-us" variant="secondary">
                About Us
              </Button>
            </span>
          </span>
        </Col>
      </Row>
    </Container>
  )
}

export default Home

import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Button from "react-bootstrap/Button"
import BookNow from "../../components/BookNow"
import service_1 from "../../images/residential.png"
import service_2 from "../../images/comercial.png"
import service_3 from "../../images/post-construction.png"

import img_1 from "../../images/img_1.jpeg"
import "./home.css"

const Home = () => {
  return (
    <section id="home">
      <h1>Dream Maids </h1>
      <div className="outer" id="contact">
        <span>
          <h2>
            We take pride in our efficient and accessible all-day support to
            provide you with help for any questions and needs.
          </h2>
          <span id="">
            <BookNow />
            or
            <Button href="tel:+(561) 287-0358" variant="secondary">
              Call Us
            </Button>
          </span>
        </span>
      </div>

      <div id="services" className="outer">
        <h2>Our Services</h2>
        <Row>
          <Col className="service-cards" lg>
            <h3>Residential</h3>
            <img src={service_1} alt="the residential service" />
            <Button href="our-services">Learn More</Button>
          </Col>

          <Col className="service-cards" lg>
            <h3>Comercial</h3>
            <img src={service_2} alt="the Comercial service" />
            <Button href="our-services">Learn More</Button>
          </Col>

          <Col className="service-cards" lg>
            <h3>Post-Construction</h3>
            <img src={service_3} alt="the Post-Construction service" />
            <Button href="our-services">Learn More</Button>
          </Col>
        </Row>
      </div>

      <div className="outer">
        <span id="aboutus">
          <h2>Bringing peace into people’s homes for 15 years</h2>
          <p>
            A journey into one woman’s dream to begin a business now a business
            that strives to reach the homes and hearts of many.
          </p>
          <Button href="about-us" variant="secondary">
            About Us
          </Button>
        </span>
      </div>
    </section>
  )
}

export default Home

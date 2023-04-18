import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"

import BookNow from "../../components/BookNow"
import service_1 from "../../images/residential.png"
import service_2 from "../../images/comercial.png"
import service_3 from "../../images/post-construction.png"

import img_1 from "../../images/img_1.jpeg"

import "./home.css"
import Card from "./Card.jsx"

const Home = () => {
  const data = [
    {
      img: service_1,
      heading: "Residential",
      content:
        "We specializes in Residential cleaning. we have been working with families around the metropolitan area for over 9 years.",
    },
    {
      img: service_2,
      heading: "Comercial",
      content:
        "Keeping your commercial property neat and clean is an integral part of maintaining your facility, improving productivity, and attracting and retaining customers.",
    },
    {
      img: service_3,
      heading: "Post-Construction",
      content:
        "We provide thorough cleaning for house sales by a professional team supervised by a manager. Additionally, we offer periodic maintenance or touch-up cleaning based on your requirements.",
    },
  ]

  return (
    <Container>
      <Row className="outer" id="home">
        <Col id="contact">
          <img src={img_1} alt="people cleaning a room" id="contact_img" />
          <h2>Contact Us</h2>
          <div>
            <h3>
              We take pride in our efficient and accessible all-day support to
              provide you with help for any questions and needs.
            </h3>
            <div>
              <BookNow />
              <p className="h4">or</p>
              <Button href="tel:+1 (561) 287-0358" variant="secondary">
                Call Us
              </Button>
            </div>
          </div>
        </Col>

        <Col id="services" className="outer">
          <h2>Our Services</h2>
          <Row id="rowed">
            {data.map((item, index) => {
              return <Card key={index} item={item} />
            })}
          </Row>
        </Col>

        <Col className="outer" id="aboutus">
          <div>
            <div>
              <h2>Bringing peace into people’s homes for 15 years</h2>
              <div>
                <p>
                  A journey into one woman’s dream to begin a business now a
                  business that strives to reach the homes and hearts of many.
                </p>
                <Button href="about-us" variant="secondary">
                  About Us
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home

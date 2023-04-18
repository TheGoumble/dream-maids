import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import Emailjs from "./Emailjs"
import "./contactUs.css"

const ContactUs = () => {
  return (
    <section>
      <Container>
        <Row className="contact">
          <Col md={5} sm={12} p-5>
            <h1>Hi there!</h1>
            <p>
              Please allow up to 24 hours for an adequate and concise response
              to each inquiry given.
            </p>
            <br />
            <p>Thank you for choosing us for your home cleaning service! </p>
          </Col>
          <Col md={6} sm={12} p-5 id="form">
            <h1>Contact form</h1>
            <Emailjs />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactUs

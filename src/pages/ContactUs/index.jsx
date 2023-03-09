import React from "react"
import Emailjs from "./Emailjs"
import "./contactUs.css"

const ContactUs = () => {
  return (
    <section>
      <div className="container">
        <div className="row contact">
          <div className="col-lg-5 col-sm-12 p-5">
            <h1>Hi there!</h1>
            <p>
              Please allow up to 24 hours for an adequate and concise response
              to each inquiry given.
            </p>
            <br />
            <p>Thank you for choosing us for your home cleaning service! </p>
          </div>
          <Emailjs />
        </div>
      </div>
    </section>
  )
}

export default ContactUs

import React from "react"
import Emailjs from "./Emailjs"

const ContactUs = () => {
  return (
    <section>
      <div className="container border mt-3 bg-light">
        <div className="row">
          <div className="col-md-5 p-5 bg-primary text-white">
            <h1>Hi there!</h1>
            <h4>
              Please allow up to 24 hours for an adequate and concise response
              to each inquiry given.
            </h4>
            <br />
            <h4>Thank you for choosing us for your home cleaning service! </h4>
          </div>
          <Emailjs />
        </div>
      </div>
    </section>
  )
}

export default ContactUs

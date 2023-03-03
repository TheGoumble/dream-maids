import React from "react"
import "./ourServices.css"

const OurServices = () => {
  return (
    <section>
      <div id="our-services" className="container">
        <h1>Our Services</h1>

        <div className="row">
          <span className="col-lg service">
            <h2>Residential</h2>
            <p className="h4">
              We specializes in Residential cleaning. we have been working with
              families around the metropolitan area for over 9 years.
            </p>
          </span>
          <span className="col-lg service">
            <h2>Comercial</h2>
            <p className="h4">
              Keeping your commercial property neat and clean is an integral
              part of maintaining your facility, improving productivity, and
              attracting and retaining customers.
            </p>
          </span>
          <span className="col-lg service">
            <h2>Post-Construction</h2>
            <p className="h4">
              We offer a detailed cleaning and prepares your house for sale.
              This is completed by a team of our professional house cleaners,
              and supervised by a manager. Following this detailed clean, we can
              also provide periodic or regularly scheduled maintenance or touch
              up cleaning, depending on your needs.
            </p>
          </span>
        </div>
      </div>
    </section>
  )
}

export default OurServices

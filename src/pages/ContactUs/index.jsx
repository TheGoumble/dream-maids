import React from "react"

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

          <div className="col-md-5 border-left py-3">
            <h1>Contact form</h1>
            <div className="form-group">
              <h5 for="name">Full Name</h5>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="form-group">
              <h5 for="phone">Phone Number</h5>
              <input
                type="tel"
                class="form-control"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <h5 for="email">Email Address</h5>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group">
              <h5 for="message">Comment or Message</h5>
              <textarea
                id="message"
                rows="3"
                className="form-control"
              ></textarea>
            </div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import {
  YOUR_TEMPLATE_ID,
  YOUR_SERVICE_ID,
  YOUR_PUBLIC_KEY,
} from "../../SECRETS.js"

const Emailjs = () => {

  const form = useRef()
  const sendEmail = (e) => {
    const params = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    }
    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, params, YOUR_PUBLIC_KEY)
      .then((res) => {
        document.getElementById("name").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""
        console.log(res)
        alert("Your message sent successfully")
      })
      .catch((err) => console.log(err))
  }
  return (
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
          placeholder="Enter a message or comment"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={sendEmail}>
        Submit
      </button>
    </div>
  )
}

export default Emailjs

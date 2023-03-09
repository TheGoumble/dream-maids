import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import emailjs from "@emailjs/browser"
import {
  YOUR_TEMPLATE_ID,
  YOUR_SERVICE_ID,
  YOUR_PUBLIC_KEY,
} from "../../SECRETS.js"
import call from "../../images/call.png"



const BookNow = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      })
  }

  const validateForm = () => {
    const { name, phone, email, message } = form
    const newErrors = {}

    if (!name || name === "") newErrors.name = "Please enter your name."
    if (!phone || phone === "")
      newErrors.phone = "Please enter your phone number."
    if (!email || email === "")
      newErrors.email = "Please enter your email address."
    if (!message || message === "")
      newErrors.message = "Please enter a message to send to us."

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      emailjs
        .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form, YOUR_PUBLIC_KEY)
        .then((res) => {
          document.getElementById("name-input").value = ""
          document.getElementById("phone-input").value = ""
          document.getElementById("email-input").value = ""
          document.getElementById("message-input").value = ""
          setForm("")
          console.log(res)
          setShow(false)
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <Button className="btn-color" onClick={handleShow}>
        <b>Book Now</b>
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4 col-lg-11 col-sm-11">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                id="name-input"
                type="text"
                class="form-control"
                placeholder="Enter your first name"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4 col-lg-11 col-sm-11">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                id="phone-input"
                type="tel"
                class="form-control"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={(e) => setField("phone", e.target.value)}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4 col-lg-11 col-sm-11">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                id="email-input"
                type="email"
                class="form-control"
                placeholder="Enter email"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 col-lg-11 col-sm-11">
              <Form.Label>Comment or Message</Form.Label>
              <Form.Control
                id="message-input"
                as="textarea"
                rows={3}
                className="form-control"
                placeholder="Enter a message or comment"
                value={form.message}
                onChange={(e) => setField("message", e.target.value)}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <a href="tel:+(561) 287-0358">
            <img style={{ width: "40px" }} src={call} alt="call now" />
          </a>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BookNow

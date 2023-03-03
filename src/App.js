import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import OurServices from "./pages/OurServices"
import Reviews from "./pages/Reviews"
import Footer from "./components/Footer"

import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div id="page-content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="our-services" element={<OurServices />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

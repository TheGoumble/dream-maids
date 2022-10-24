import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="" element={} />
          <Route path="" element={} />
          <Route path="" element={} /> */}

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

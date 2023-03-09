import React from "react"
import logo from "../../images/logo.png"
import theGoumble from "../../images/TheGoumble.png"
import "./footer.css"
import BookNow from "../BookNow"
import Animations from "./Animations"

const Footer = () => {
  return (
    <footer>
      <Animations />
      <section>
        <div className="container">
          <div className="row info">
            <div id="location" className="col-lg">
              <span>
                <b className="text-color">Phone:</b>
                <a id="links" target="_blank" href="tel:+(561) 287-0358">
                  (561) 287-0358
                </a>
              </span>
              <b className="text-color">Location:</b>
              <p>Palm Beach FL</p>
            </div>

            <div id="center-footer" className="col-lg">
              <span>
                <img id="img" src={logo} alt="Dream Maids Logo" />
                <BookNow />
              </span>
            </div>

            <div id="hours" className=" col-lg">
              <span>
                <b className="text-color">Hours:</b>
                <p>Monday - Friday, 9:00 am - 6:00 pm</p>
                <p>Weekends by request</p>
              </span>
            </div>
          </div>
          <div id="bottem">
            <p>&copy;2023 by Dream Maids LLC</p>
            <span>
              <p>Powered by</p>
              <a
                href="https://github.com/TheGoumble/dream-maids"
                target="_blank"
              >
                <img
                  src={theGoumble}
                  alt="link to The github repo for the dream maids site"
                  id="theg"
                />
              </a>
            </span>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer

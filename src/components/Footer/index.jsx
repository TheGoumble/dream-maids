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
          <div className="row">
            {/* Column1 */}
            <div className="col">
              {/* <img id="img" src={logo} alt="Dream Maids Logo" /> */}
              <h4>Dream Maids</h4>
              <ul className="list-unstyled">
                <li>Providing customized high-quality</li>
                <li> cleaning and maintenance services</li>
                <li>to meet clients' needs.</li>
              </ul>
            </div>
            {/* Column2 */}
            <div className="col">
              <h5>Phone:</h5>
              <ui className="list-unstyled">
                <li>
                  {" "}
                  <a id="links" target="_blank" href="tel:+(561) 287-0358">
                    (561) 287-0358
                  </a>
                </li>
              </ui>
              <h5>Location:</h5>
              <ui className="list-unstyled">
                <li> Palm Beach FL</li>
              </ui>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>Hours:</h4>
              <ui className="list-unstyled">
                <li>Monday - Friday,</li>
                <li>9:00 am - 6:00 pm</li>
                <li>Weekends by request</li>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} by Dream Maids LLC | All rights
              reserved | Powered by
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
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer

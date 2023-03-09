import React from "react"
import logo from "../../images/logo.png"
import theGoumble from "../../images/TheGoumble.png"
import "./footer.css"
import "./animation.css"
import BookNow from "../BookNow"

const Footer = () => {
  return (
    <footer>
      <div id="effects">
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(156,206,203,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(156,206,203,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(156,206,203,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#9CCECB" />
          </g>
        </svg>
      </div>

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

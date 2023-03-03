import React from "react"
import Container from "react-bootstrap/Container"
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
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <section>
        <Container>
          <div className="row info">
            <div id="location" className=" col-md-4">
              <span>
                <b>Phone:</b>
                <a id="links" target="_blank" href="tel:+(561) 287-0358">
                  (561) 287-0358
                </a>
              </span>
              <b>Location:</b>
              <p>Palm Beach FL</p>
            </div>

            <div className="col-md-3 col-11 center-footer">
              <span className="center-footer">
                <img id="img" src={logo} alt="Dream Maids Logo" />
                <p>&copy;2023 by Dream Maids LLC</p>
              </span>

              <span id="powered">
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

            <div id="hours" className=" col-md-4">
              <span>
                <b>Hours:</b>
                <p>Monday - Friday, 9:00 am - 6:00 pm</p>
                <p>Weekends by request</p>
                <BookNow/>
              </span>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  )
}

export default Footer

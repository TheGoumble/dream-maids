import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import facebook from "../../images/facebook-144.png"
import yelp from "../../images/yelp-144.png"
import logo from "../../images/logo.png"
import theGoumble from "../../images/TheGoumble.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      {/* <div id="connect">
          <a href="https://www.yelp.com/biz/dream-maids-cleaning-services-greenacres">
          <img src={yelp} alt="Link to Dream maids' yelp page" />
          </a>
          <a href="https://www.facebook.com/dreammaidspalmbeach/">
          <img src={facebook} alt="Link to Dream maids' facebook page" />
          </a>
        </div> */}

      <Container>

        <div className="row info">
          <div className=" col-md-4 col-11">
            <span>
              <b>Phone:</b>
              <a id="links" target="_blank" href="tel:+(561) 287-0358">
                (561) 287-0358
              </a>
            </span>
            <b>Location:</b>
            <p>Palm Beach FL</p>
          </div>

          <div className="col-md-3 col-11">
            <img id="img" src={logo} alt="Dream Maids Logo" />
          </div>

          <div className=" col-md-4 col-11">
            <span>
              <b>Hours:</b>
              <p>Monday - Friday, 9:00 am - 6:00 pm</p>
              <p>Weekends by request</p>
            </span>
          </div>
        </div>
      </Container>

      <span>
        <p>&copy;2022 by Dream Maids LLC</p>
        <span id="powered">
          <p>Powered by</p>
          <a href="https://github.com/TheGoumble/dream-maids" target="_blank">
            <img
              src={theGoumble}
              alt="link to The github repo for the dream maids site"
              id="theg"
            />
          </a>
        </span>
      </span>
    </footer>
  )
}

export default Footer

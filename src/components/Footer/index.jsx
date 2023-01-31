import React from "react"
import facebook from "../../images/facebook-144.png"
import yelp from "../../images/yelp-144.png"
import logo from "./../../images/logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <section>
        <div id="connect">
          <a href="https://www.yelp.com/biz/dream-maids-cleaning-services-greenacres">
            <img src={yelp} alt="Link to Dream maids' yelp page" />
          </a>
          <a href="https://www.facebook.com/dreammaidspalmbeach/">
            <img src={facebook} alt="Link to Dream maids' facebook page" />
          </a>
        </div>
        <img id="img" src={logo} alt="Dream Maids Logo" />

        <span>
          <p>Phone:</p>
          <a id="links" href="tel:+(561) 287-0358">
            (561) 287-0358
          </a>
        </span>

        <span>
          <b>Location:</b>
          <p>Palm Beach FL</p>
        </span>

      </section>

      <p>&copy;2022 by Dream Maids LLC</p>
    </footer>
  )
}

export default Footer

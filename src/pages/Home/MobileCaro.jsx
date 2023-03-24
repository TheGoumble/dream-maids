import { Button, Carousel } from "react-bootstrap"
import service_1 from "../../images/residential.png"
import service_2 from "../../images/comercial.png"
import service_3 from "../../images/post-construction.png"

const MobileCaro = () => {
  return (
    <Carousel id="carousel">
      <Carousel.Item >
        <div className="carousel-color">
          <img src={service_1} alt="the Residential service" />
        </div>
        <Carousel.Caption>
          <h3>Residential service</h3>
          <Button href="our-services">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-color">
          <img src={service_2} alt="the Comercial service" />
        </div>
        <Carousel.Caption>
          <h3>Comercial service</h3>
          <Button href="our-services">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-color">
          <img src={service_3} alt="the Post-Construction service" />
        </div>

        <Carousel.Caption>
          <h3>Post-Construction service</h3>
          <Button href="our-services">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MobileCaro

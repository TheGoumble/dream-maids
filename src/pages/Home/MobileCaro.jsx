import { useState } from "react"
import { Button, Carousel } from "react-bootstrap"
import useCollapse from "@gaearon/react-collapsed"

const Callapse = ({ item }) => {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <>
      <p {...getCollapseProps()} className="h4">
        {item}
      </p>

      <Button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? "Collapse" : "Expand"}
      </Button>
    </>
  )
}

const MobileCaro = ({ data }) => {
  return (
    <Carousel id="carousel">
      <Carousel.Item>
        <div className="carousel-color">
          <img src={data[0].img} alt="the Residential service" />
        </div>
        <Carousel.Caption>
          <h3>{data[0].heading}</h3>
          <Callapse item={data[0].content} />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-color">
          <img src={data[1].img} alt="the Comercial service" />
        </div>
        <Carousel.Caption>
          <h3>{data[1].heading}</h3>
          <Callapse item={data[1].content} />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-color">
          <img src={data[2].img} alt="the Post-Construction service" />
        </div>

        <Carousel.Caption>
          <h3>{data[2].heading}</h3>
          <Callapse item={data[2].content} />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MobileCaro

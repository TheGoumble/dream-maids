import { useState } from "react"
import { Col, Button } from "react-bootstrap"
import useCollapse from "@gaearon/react-collapsed"

const Card = ({ item }) => {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <Col className="service-cards" lg md>
      <h3>{item.heading}</h3>
        <img src={item.img} />
      <p {...getCollapseProps()} className="h4">
        {item.content}
      </p>
      <Button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? "Collapse" : "Expand"}
      </Button>
    </Col>
  )
}

export default Card

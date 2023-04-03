import React from "react"
import { Accordion, Button } from "react-bootstrap"

const AccordionBar = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <CustomToggle eventKey="0">Click me!</CustomToggle>
        <Accordion.Collapse eventKey="0">
        
        </Accordion.Collapse>
      </Accordion>
    </>
  )
}

export default AccordionBar

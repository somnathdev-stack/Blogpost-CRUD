import React from 'react'
import { Button } from 'react-bootstrap';
const Submitbutton = ({ text }) => {
  return (
    <Button variant="primary" type="submit" className="w-100">
      {text}
    </Button>
  )
}

export default Submitbutton

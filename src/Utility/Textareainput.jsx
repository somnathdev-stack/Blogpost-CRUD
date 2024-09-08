import React from 'react'
import { Form } from 'react-bootstrap';
const Textareainput = ({label,name,placeholder,value,onChange}) => {
  return (
    <Form.Group controlId="formContent" className="mb-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      as="textarea"
      rows={3}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  </Form.Group>
  )
}

export default Textareainput

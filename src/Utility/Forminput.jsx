import React from 'react'
import { Form } from 'react-bootstrap';

const Forminput = ({controlId, label, type, placeholder,name,value,onChange}) => {
  return (
    <Form.Group controlId={controlId} className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control 
          type={type} 
          placeholder={placeholder} 
          name={name}
          value={value}
          onChange={onChange}
          required 
        />
    </Form.Group>
  )
}

export default Forminput

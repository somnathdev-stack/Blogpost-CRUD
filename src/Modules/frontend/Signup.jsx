import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import Forminput from '../../Utility/Forminput';
import { useNavigate } from 'react-router-dom';
import Submitbutton from '../../Utility/Submitbutton';
import useAuth from '../../Utility/Hooks/useAuth';
import { connect } from "react-redux";
import {signupSuccess} from '../../actions/allActions'
const Signup = (props) => {
  const {userData,signupSuccess} = props;
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
  const { data, error, loading, postData } = useAuth(userData,signupSuccess); 
  
  useEffect(()=>{
    console.log(data);
    if(data && data.response) {
      navigate('/sign-in');
    }
  },[data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    postData(formData);
    setFormData({ username: '', password: '', confirmPassword: '' });
  };
  return (
    <Container className="my-4">
    <Row className="justify-content-md-center">
      <Col md={6}>
        <h2 className="my-4 text-center">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Forminput
            controlId="formUsername"
            label="Username"
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Forminput
            controlId="formPassword"
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
           <Forminput
              controlId="formConfirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          <Submitbutton text="Sign Up"/>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

const mapStateToProps = (globalstate)=>{
  return {
    userData: globalstate.mainReducerData.userData
  }
};

export default connect(mapStateToProps, {
  signupSuccess
})(
 (Signup)
);



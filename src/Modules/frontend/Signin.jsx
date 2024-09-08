import React, { useState} from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import Forminput from "../../Utility/Forminput";
import Submitbutton from "../../Utility/Submitbutton";
import { connect } from "react-redux";
import useAuth from "../../Utility/Hooks/useAuth";
import {signinSuccess} from '../../actions/allActions'
const Signin = (props) => {
  const {userData,signinSuccess,token} = props;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const [error, setError] = useState({
    username:"",
    password:""
  });

  
  const handleChange = (e) => {
    setError({
      username:"",
      password:""
    })
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    
  };

 


  const loginData = async (formData)=>{
    let value = JSON.parse(localStorage.getItem('userDetails'));
    if (value) {
      if(Object.keys(formData).length > 0) 
      {
        let isUsernameValid =  value.username === formData.username ;
        let isPasswordValid =  value.password === formData.password;
        if (isUsernameValid && isPasswordValid) {
          console.log('value',value);
          signinSuccess('JWT_TOKEN');
          localStorage.setItem('token','JWT_TOKEN');
          setFormData({
            username: "", password: ""
          })
          navigate('/blog-list');
        } else {
            if (!isUsernameValid) {
              setError({username:'username'});
            }
  
            if (!isPasswordValid) {
              setError({password:"password"});
            }
        }
      }
    } else {
      alert("Credentials not match");
    }
   
}

const handleSubmit = (e) => {
  e.preventDefault();
  loginData(formData);
};

  

  return (
    <Container className="my-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="my-4 text-center">Sign In</h2>
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
            {error?.username !="" && <p className="text-danger">Username is not Valid</p>}
            <Forminput
              controlId="formPassword"
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {error?.password !="" && <p className="text-danger">Password is not valid</p>}
            <Submitbutton text="Sign In" />
            {/* {error && <p className="text-danger">{error}</p>} */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = (globalstate)=>{
  return {
    userData: globalstate.mainReducerData.userData,
    token: globalstate.mainReducerData.token
  }
};

export default connect(mapStateToProps,{
  signinSuccess
})(
 (Signin)
);

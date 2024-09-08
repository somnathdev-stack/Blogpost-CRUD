import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logoutSuccess } from "../../../actions/allActions";
import { connect } from "react-redux";
import Confirmationmodal from "../../Modal/Confirmationmodal";
const Header = (props) => {
  const {logoutSuccess} = props;
  const [showModal, setShowModal] = useState(false);
  const logout = ()=>{
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  };
  const confirmLogout = () => {
    localStorage.clear();
    logoutSuccess("logout");
    window.location.href = '/'
  };
  
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Blogmaster
          </Navbar.Brand>
          {/* <Nav className="me-auto">
            
          </Nav> */}
          <Nav>
            <Button
              variant="outline-light"
              onClick={() => logout()}
            >
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Confirmationmodal
        show={showModal}
        onClose={closeModal}
        onConfirm={confirmLogout}
        title="Logout"
        message="Are you sure you want to Logout?"
      />
    </div>
  );
};
const mapStateToProps = (globalstate)=>{
  return {
    userData: globalstate.mainReducerData.userData,
    token: globalstate.mainReducerData.token
  }
};

export default connect(mapStateToProps, {
  logoutSuccess
})((Header));


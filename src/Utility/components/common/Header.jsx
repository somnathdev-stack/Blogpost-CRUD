import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Blogmaster</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/sign-in">Signin</Nav.Link>
            <Nav.Link as={Link} to="/sign-up">signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
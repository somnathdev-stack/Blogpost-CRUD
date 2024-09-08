import React from 'react'
import { Container, Row, Col,Image} from 'react-bootstrap';
const Home = () => {
  return (
    <Container className="my-4">
    <Row>
      <Col md={8}>
        <h2>About Our Website</h2>
        <p>
          Welcome to our blog platform, where you can share your thoughts, ideas, and experiences with a wide audience. Our platform provides an easy-to-use interface for creating, editing, and commenting on blog posts. Whether you're a seasoned writer or just getting started, you'll find the tools you need to express yourself.
        </p>
        <p>
          Our mission is to create a space where diverse voices can be heard and where meaningful conversations can take place. We believe in the power of words to inspire change and build connections, and we're here to support you every step of the way.
        </p>
        <p>
          Join our community today and start sharing your stories with the world. We're excited to see what you'll create!
        </p>
      </Col>
      <Col md={4}>
        <Image
          src="https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Website Image"
          fluid
        />
      </Col>
    </Row>
  </Container>
  )
}

export default Home

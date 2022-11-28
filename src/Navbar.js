import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function App1() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{ fontSize: '40px' }}>
          Wix eCommerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', color: 'black', padding: '15px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Launch</Nav.Link>
            <Nav.Link href="#action2">Sell</Nav.Link>
            <Nav.Link href="#action1">Launch</Nav.Link>
            <Nav.Link href="#action1">Manage</Nav.Link>
            <Nav.Link href="#action1">Promote</Nav.Link>
            <Nav.Link href="#action1">Resource</Nav.Link>
            <Nav.Link href="#action1">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="white">Login</Button>{' '}
            <Button
              variant="btn btn-dark"
              style={{
                borderRadius: '30px',
                padding: '15px',
                fontSize: '15px',
                fontFamily: 'Arial',
              }}
            >
              Create Your Store
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import {Navbar, Container, Nav} from 'react-bootstrap'
import{useAuth} from '../contexs/AuthContex';

const Header = () => {

    const {user} = useAuth();

    return(
        <>
       <Navbar bg="dark" variant="dark">
       <Container>
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
         
       <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="primary" variant="dark">
    <Container>
    <p>{user?.email || 'Anonymos'}</p>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <br />
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    )
}

export default Header;
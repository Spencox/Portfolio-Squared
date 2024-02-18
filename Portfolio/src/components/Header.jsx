import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Navigate } from 'react-router';

function Header() {
  return (
    <Navbar 
      expand="lg" 
      className="bg-danger"
    >
      <Container>
        <Navbar.Brand href="#home">Spencer Cox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Navigate />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

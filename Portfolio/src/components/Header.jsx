import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navigate from './Navigation';

function Header() {
  return (
    <Navbar 
      expand="lg" 
      style={{ backgroundColor: '#FCD757' }}
    >
      <Container style={{ backgroundColor: '#FCD757' }}>
        <Navbar.Brand 
          style={{ 
            color: '#5E5B52', 
            textDecoration: 'none', 
            cursor: 'default' 
          }}
        >
          Spencer Cox
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navigate />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

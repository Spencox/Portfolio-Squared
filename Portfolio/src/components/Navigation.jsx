import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';

function Navigate() {
    const currentPage = useLocation().pathname;

    return (
        <Nav className="me-auto">
            <Nav.Link 
                to="/" 
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >About Me</Nav.Link>
            <Nav.Link href="#">Portfolio</Nav.Link>
            <Nav.Link href="#">Contact Me</Nav.Link>
            <Nav.Link href="#">Resume</Nav.Link>
        </Nav>
    )
}

export default Navigate;
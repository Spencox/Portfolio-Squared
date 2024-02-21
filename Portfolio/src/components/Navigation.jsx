import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';

function Navigate() {
    const currentPage = useLocation().pathname;

    return (
        <Nav className="me-auto">
            <Link 
                to="/" 
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >About Me</Link>
            <Link  
                to="/Portfolio" 
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >Portfolio</Link>
            <Link 
                to="/Contact"
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >Contact Me</Link>
            <Link 
                to="/Resume" 
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >Resume</Link>
        </Nav>
    )
}

export default Navigate;
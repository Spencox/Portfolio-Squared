import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';

function Navigate() {
    const currentPage = useLocation().pathname;

    return (
        <Nav className="me-auto align-items-center">
            <Link 
                to="/" 
                className="nav-link"
                style={{ 
                    fontSize: 'x-large', 
                    color: currentPage === '/' ? '#FC7A57' : '#5E5B52',
                    fontWeight: currentPage === '/' ? 'bold' : 'normal'
                }}
            >About Me</Link>
            <Link  
                to="/Portfolio" 
                className="nav-link"
                style={{ 
                    fontSize: 'x-large', 
                    color: currentPage === '/Portfolio' ? '#FC7A57' : '#5E5B52',
                    fontWeight: currentPage === '/Portfolio' ? 'bold' : 'normal'
                }}
            >Portfolio</Link>
            <Link 
                to="/Contact"
                className="nav-link"
                style={{ 
                    fontSize: 'x-large', 
                    color: currentPage === '/Contact' ? '#FC7A57' : '#5E5B52',
                    fontWeight: currentPage === '/Contact' ? 'bold' : 'normal'
                }}
            >Contact Me</Link>
            <Link 
                to="/Resume" 
                className="nav-link"
                style={{ 
                    fontSize: 'x-large', 
                    color: currentPage === '/Resume' ? '#FC7A57' : '#5E5B52',
                    fontWeight: currentPage === '/Resume' ? 'bold' : 'normal'
                }}
            >Resume</Link>
        </Nav>
    )
}

export default Navigate;

import React from "react";
import githubLogo from '../assets/github-mark.svg';
import linkedInLogo from '../assets/linkedin.svg';
import { Container, Row, Col } from "react-bootstrap";
const githubUrl = 'https://github.com/Spencox'
const linkedInUrl = 'https://www.linkedin.com/in/spencer-cox-pe'

const Footer = () => {
    return (
        <footer className='bg-custom-color' style={{ backgroundColor: '#fcd757' }} >
            <Container>
                <Row>
                    <Col className="py-4 text-center">
                        <a href={githubUrl} target="_blank">
                            <img src={githubLogo} alt="Github Link" style={{ maxWidth: '25px', marginRight: '10px' }} />
                        </a>
                        <a href={linkedInUrl} target="_blank">
                            <img src={linkedInLogo} alt="LinkedIn Link" style={{ maxWidth: '25px' }} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
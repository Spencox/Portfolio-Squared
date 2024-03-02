import React from 'react';
import { Container } from 'react-bootstrap';

export default function Resume() {
  return (
    <Container>
      <div>
        <h1 className="py-4">Resume</h1>
        <h3>
          <a href="/assets/Spencer_Cox_Resume.pdf" download className="py-3" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>
            Download PDF Resume <span role="img" aria-label="document">📄</span>
          </a>
        </h3>
        <h2 className="py-3">Front-end Technologies:</h2>
        <ul className='fs-5'>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>jQuery</li>
          <li>Webpack</li>
          <li>AJAX</li>
          <li>Redux</li>
        </ul>
        <h2 className="py-3">Back-end Technologies with Node.js Packages:</h2>
        <ul className='fs-5'>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>JWT</li>
          <li>Axios</li>
          <li>Nodemon</li>
          <li>Body-parser</li>
          <li>Bcrypt.js</li>
        </ul>
      </div>
    </Container>
  );
}

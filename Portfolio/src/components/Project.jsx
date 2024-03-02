import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Project({ projects }) {
  return (
    <Container className="d-flex justify-content-center">
      <Row xs={1} md={2} lg={2} xl={2} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className='m-4' style={{ height: '300px', width: '400px', backgroundImage: `url(${project.imgPath})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
              <div className="card-links" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '', zIndex: '1' }}>
                <a href={project.deployedUrl} style={{ color: '#FFFCFF', textDecoration: 'none', marginBottom: '10px', backgroundColor: '#5e5b52', padding: '5px 10px', borderRadius: '5px' }}>{project.name}</a>
                <a href={project. gitHubRepoUrl} style={{ color: '#FFFCFF', textDecoration: 'none', backgroundColor: '#5e5b52', padding: '5px 10px', borderRadius: '5px' }}>Visit Repo</a>
              </div>
              <Card.Body></Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Project;

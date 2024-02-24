import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Project({ projects }) {
  return (
    <Container className="d-flex justify-content-center">
      <Row xs={1} md={2} lg={3} xl={3} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <div style={{ position: 'relative', width: '400px', height: '300px', margin: '10px', overflow: 'hidden' }}>
              <Card className='m-4' style={{ height: '100%', width: '100%', backgroundImage: `url(${project.imgPath})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div className="card-links" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', zIndex: '1' }}>
                  <a href={project.deployedUrl} style={{ color: 'white', textDecoration: 'none', marginBottom: '10px', backgroundColor: 'red', padding: '5px 10px', borderRadius: '5px' }}>{project.name}</a>
                  <a href={project.gitHubUrl} style={{ color: 'white', textDecoration: 'none', backgroundColor: 'red', padding: '5px 10px', borderRadius: '5px' }}>Visit Repo</a>
                </div>
                <Card.Body></Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Project;

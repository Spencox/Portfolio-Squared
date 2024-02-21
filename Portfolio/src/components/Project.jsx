import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Project({ projects }) {
  return (
    <Container className="d-flex justify-content-center">
      <Row xs={1} md={2} lg={2} xl={2} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className='m-4' style={{ height: '300px', backgroundImage: 'url("https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Card.Body>
                <Card.Link href={project.deployedUrl} style={{ color: 'white' }}>
                  <Card.Title style={{ color: 'white' }}>{project.name}</Card.Title>
                </Card.Link>
                <Card.Link href={project.gitHubUrl} style={{ color: 'white' }}>Repo</Card.Link>
                <Card.Text style={{ color: 'white' }}>
                  WEEKLY OBJECTIVE
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Project;

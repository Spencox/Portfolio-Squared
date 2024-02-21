import React from 'react';
import Card from 'react-bootstrap/Card';

function Project() {
  return (
    <Card style={{ width: '18rem', backgroundImage: 'url("https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Card.Body>
        <Card.Title style={{ color: 'white' }}>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text style={{ color: 'white' }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#" style={{ color: 'white' }}>Card Link</Card.Link>
        <Card.Link href="#" style={{ color: 'white' }}>Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Project;

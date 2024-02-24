import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="d-flex flex-column align-items-center p-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="w-50">
        <Form.Group controlId="validationCustomName">
          <Form.Label className="py-2 fs-5">Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
          />
          <Form.Control.Feedback type="invalid">
            Please provide your name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustomEmail">
          <Form.Label className="py-2 fs-5">Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustomMessage">
          <Form.Label className="py-2 fs-5">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            placeholder="Message"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a message.
          </Form.Control.Feedback>
        </Form.Group>
        {/* Submit button */}
        <div className="text-center m-3">
          <Button type="submit">Submit form</Button>
        </div>
      </Form>
    </Container>
  );
}

export default Contact;
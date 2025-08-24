import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors: Partial<FormData> = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.email.trim()) errors.email = 'Email is required.';
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Invalid phone number.';
    }
    if (!formData.message.trim()) errors.message = 'Message is required.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || submitted) return;

    if (validate()) {
      setIsSubmitting(true);
      // TODO: Replace this spoofed submit with AWS Lambda + SES integration
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
      }, 500);
    }
  };

  return (
    <div className="py-5 d-flex justify-content-center">
      <Card className="contact-card rounded shadow-sm p-4">
        <h2 className="text-center mb-3">Contact Us</h2>
        {!submitted && (
          <p className="text-center text-muted mb-2">
            Need a quote or just have a question? Fill out the form below and we'll get back to you soon.
          </p>
        )}

        {submitted ? (
          <Alert variant="success" className="text-center">
            Thank you! Your message has been sent.
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>
                Name <span className="text-danger fw-bold">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!formErrors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>
                Email <span className="text-danger fw-bold">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!formErrors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>
                Phone <span className="text-danger fw-bold">*</span>
              </Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={!!formErrors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label>
                Message <span className="text-danger fw-bold">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!formErrors.message}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.message}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
              </Button>
            </div>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default Contact;

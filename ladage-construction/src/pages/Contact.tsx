import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format.';
        }

        if (formData.phone.trim() && !/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number.';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
        }

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            // This is where you'll integrate with AWS Lambda/SES later
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="container mt-5 mb-5" style={{ maxWidth: '600px' }}>
            <h2 className="mb-4 text-center">Get in Touch</h2>
            <p className="text-center text-muted mb-4">
                Have a question or need a quote? Fill out the form below and we'll get back to you soon.
            </p>
            <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address <span className="text-danger">*</span>
                    </label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone number (optional)
                    </label>
                    <input
                        type="tel"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <div className="mb-5">
                    <button type="submit" className="btn btn-primary w-100">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;

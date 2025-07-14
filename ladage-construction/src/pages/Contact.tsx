import { useRef } from 'react';

function Contact() {
    const formRef = useRef<HTMLFormElement>(null);

    const scrollToField = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <div className="container mt-5 mb-5" style={{ maxWidth: '600px' }}>
            <h2 className="mb-4 text-center">Get in Touch</h2>
            <p className="text-center text-muted mb-4">
                Have a question, need a quote, or just want to say hello? Fill out the form below and a member of our team will
                get back to you as soon as we can.
            </p>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone number (optional)</label>
                    <input type="tel" className="form-control" id="phone" placeholder="(123) 456-7890" />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                        className="form-control" 
                        id="message" 
                        rows={5} 
                        placeholder="How can we help you?"
                        onFocus={scrollToField}
                    />
                </div>

                <div className="mb-5">
                    <button type="submit" className="btn btn-primary w-100" disabled>
                        Send Message (Not connected yet)
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
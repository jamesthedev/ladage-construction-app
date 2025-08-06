import React from 'react';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white">
            <div className="container py-4">
                <div className="row text-muted">
                    {/* Left Column: Business Info */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="fw-bold mb-1">Ladage Construction</h5>
                        <p className="mb-2">Your trusted partner in quality construction.</p>
                        <p className="mb-1">
                            📍{' '}
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=address+street,+Austin,+Texas+zip"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary text-decoration-none hover-underline"
                            >
                                123 Main St, Austin, TX
                            </a>
                            <br />
                            📞{' '}
                            <a
                                href="tel:4055551234"
                                className="text-primary text-decoration-none hover-underline"
                            >
                                (405) 555-1234
                            </a>
                        </p>
                    </div>

                    {/* Middle Column: Links */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h6 className="fw-bold mb-2">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="./" className="text-muted text-decoration-none">Home</a></li>
                            <li><a href="./ourwork" className="text-muted text-decoration-none">Our Work</a></li>
                            <li><a href="./contact" className="text-muted text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right Column: Social Icons */}
                    <div className="col-md-4 text-md-center">
                        <h6 className="fw-bold mb-2">Follow Us</h6>
                        <a
                            href="https://www.facebook.com/profile.php?id=61570560505077"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                            aria-label="Facebook"
                        >
                            <i className="bi bi-facebook" style={{ fontSize: '1.50rem' }}></i>
                        </a>
                        {/* Add more icons as needed */}
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="row mt-4 border-top pt-3">
                    <div className="col text-center">
                        <small className="text-muted">
                            &copy; {year} Ladage Construction. All rights reserved.
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

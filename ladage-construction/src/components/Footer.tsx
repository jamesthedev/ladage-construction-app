import React from 'react';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-light border-top fixed-bottom">
            <div className="container d-flex flex-nowrap justify-content-between align-items-center py-2">
                <small className="text-muted mb-0 text-truncate" style={{ whiteSpace: 'nowrap' }}>
                    &copy; {year} Ladage Construction. All rights reserved.
                </small>

                <a
                    href="https://www.facebook.com/profile.php?id=61570560505077"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted text-decoration-none"
                    aria-label="Facebook"
                >
                    <i className="bi bi-facebook" style={{ fontSize: '1.1rem' }}></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
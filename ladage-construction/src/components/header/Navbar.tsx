import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav className="navbar navbar-light bg-light px-3 py-2 border-bottom fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left: Logo + Business Name */}
          <a className="navbar-brand d-flex align-items-center" href="./">
            <img
              src="./ladage-logo-transparent.png"
              alt="Logo"
              className="me-2 img-fluid"
              style={{ maxHeight: '60px' }}
            />
            <span className="text-nowrap fw-bold">Ladage Construction</span>
          </a>

          {/* Right: Mobile Menu Toggle (on small screens) */}
          <button
            className="btn btn-outline-secondary d-lg-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Nav Links */}
          <ul className="navbar-nav ms-auto d-none d-lg-flex flex-row gap-4">
            <li className="nav-item">
              <a className="nav-link fs-5" href="./">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="./ourwork">Our Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="./contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Drawer (mobile)*/}
      <div
        ref={menuRef}
        className="position-fixed top-0 end-0 bg-white h-100 shadow-lg px-4 pt-5"
        style={{
          width: '250px',
          zIndex: 1050,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="btn btn-link position-absolute top-0 end-0 m-3 text-dark"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <ul className="nav flex-column mt-4 fs-5">
          <li className="nav-item mb-3">
            <a href="./" className="nav-link text-dark" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li className="nav-item mb-3">
            <a href="./ourwork" className="nav-link text-dark" onClick={() => setIsOpen(false)}>Our Work</a>
          </li>
          <li className="nav-item mb-3">
            <a href="./contact" className="nav-link text-dark" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

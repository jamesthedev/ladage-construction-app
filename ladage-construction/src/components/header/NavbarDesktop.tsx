function NavbarDesktop() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 d-none d-lg-flex">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="/ladage-logo-transparent.png"
            alt="Logo"
            className="me-2 img-fluid"
            style={{ maxHeight: '60px' }}
          />
          <span className="text-nowrap">Ladage Construction</span>
        </a>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link fs-5" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5" href="/ourwork">Our Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarDesktop;

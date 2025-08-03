import FadeInSection from "../../components/animations/FadeInSection";

function Hero() {
  return (
    <FadeInSection delay={0.4}>
      <section
        className="text-white text-center text-lg-start d-flex align-items-center position-relative w-100 min-vh-100"
        style={{
          backgroundImage: "url('/images/house.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75" />

        {/* Content */}
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold">Building Excellence, One Project at a Time</h1>
              <p className="lead mt-3">
                Welcome to Ladage Construction — your trusted partner in quality construction.
              </p>
              <a href="/contact" className="btn btn-primary btn-lg mt-4">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

export default Hero;

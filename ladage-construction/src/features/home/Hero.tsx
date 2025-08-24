import FadeInSection from "../../components/animations/FadeInSection";

function Hero() {
  return (
    <FadeInSection delay={0.4}>
      <section className="bg-light text-dark text-center text-lg-start py-5 w-100">
        <div className="container">
          <div className="row align-items-center">
            {/* Left text content */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold">Building Excellence, One Project at a Time</h1>
              <p className="lead">
                Welcome to <strong>Ladage Construction</strong>, your trusted partner in quality construction.
              </p>
              <a href="./contact" className="btn btn-primary btn-lg mt-3 btn-accent">
                Get a Free Quote
              </a>
            </div>

            {/* Right image (optional) */}
            <div className="col-lg-6 text-center">
              <img
                src="./ladage-logo.jpg"
                alt="Construction crew"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

export default Hero;

import FadeUpSection from "../../components/animations/FadeUpSection";

function AboutUs() {
  return (
    <FadeUpSection delay={0.3} >
      <section className="py-5 px-2 about-us-wrapper">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">About Us</h2>
          <div className="row align-items-center">

            {/* Text Column */}
            <div className="col-md-7 pe-md-5" style={{ textAlign: 'justify' }}>
              <p>
                At <strong>Ladage Construction</strong>, we are more than just a construction company.
                We're a family-owned and operated business proudly serving Austin, Texas with craftsmanship,
                integrity, and lasting results.
              </p>
              <p>
                Whether it's a full remodel, a custom home build, or a beautiful new deck, we take pride
                in offering a dependable and personalized experience. Our team treats every project as if
                it were our own home - with attention to detail, quality materials, and skilled workmanship.
              </p>
              <p>
                We believe in strong communication, fair pricing, and exceeding expectations at every turn.
                Your vision is our blueprint, and we're honored to help bring it to life.
              </p>
              <p className="fw-semibold">
                Thank you for trusting Ladage Construction. We look forward to building with you!
              </p>
            </div>

            {/* Image Column */}
            <div className="col-md-5 text-center mt-4 mt-md-0">
              <img
                src="./ladage-logo.jpg"
                alt="Ladage Construction team or project"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
    </FadeUpSection>
  );
}

export default AboutUs;

import FadeUpSection from "../../components/animations/FadeUpSection";

function FeaturedProject() {
  return (
    <FadeUpSection>
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Featured Project</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="./projects/featured.jpg"
                alt="Carousel of a featured project"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">Modern Porch & Exterior Remodel</h4>
              <p>
                This complete transformation features a custom-built front porch with recessed
                lighting, high-end materials, and expert craftsmanship. The client's vision was brought
                to life with precision and care.
              </p>
              <a href="/ourwork" className="btn btn-outline-primary mt-2">
                See More Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </FadeUpSection>
  );
}

export default FeaturedProject;

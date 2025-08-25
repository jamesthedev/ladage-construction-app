import FadeUpSection from "../../components/animations/FadeUpSection";
import { Carousel } from "react-bootstrap";

function FeaturedProject() {
  return (
    <FadeUpSection>
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Featured Project</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="rounded shadow overflow-hidden">

                <Carousel className="rounded shadow">
                  <Carousel.Item>
                    <img
                      src="./images/house.jpg"
                      alt="Featured project - view 1"
                      className="d-block w-100 img-fluid featured-carousel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="./images/counter.jpg"
                      alt="Featured project - view 2"
                      className="d-block w-100 img-fluid featured-carousel"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="./images/house.jpg"
                      alt="Featured project - view 3"
                      className="d-block w-100 img-fluid featured-carousel"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className="col-md-6">
              <h4 className="fw-bold">Modern Porch & Exterior Remodel</h4>
              <p>
                This complete transformation features a custom-built front porch with recessed
                lighting, high-end materials, and expert craftsmanship. The client's vision was
                brought to life with precision and care.
              </p>
              <a href="./ourwork" className="btn btn-primary mt-2">
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

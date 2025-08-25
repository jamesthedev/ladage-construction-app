import services from '../../data/Services';
import FadeUpSection from '../../components/animations/FadeUpSection';

function Services() {
  return (
    <FadeUpSection>
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Our Services</h2>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="fs-1 mb-3">{service.icon}</div>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeUpSection>
  );
}

export default Services;

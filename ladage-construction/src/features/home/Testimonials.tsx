import FadeUpSection from "../../components/animations/FadeUpSection";

function Testimonials() {
  return (
    <FadeUpSection>
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <blockquote className="blockquote">
                <p className="mb-0">"The team at Ladage exceeded our expectations. Professional, punctual, and flawless execution!"</p>
                <footer className="blockquote-footer mt-2">Sarah J.</footer>
              </blockquote>
            </div>
            <div className="col-md-4 mb-4">
              <blockquote className="blockquote">
                <p className="mb-0">"We couldn't be happier with our new deck. Highly recommend!"</p>
                <footer className="blockquote-footer mt-2">Mike L.</footer>
              </blockquote>
            </div>
            <div className="col-md-4 mb-4">
              <blockquote className="blockquote">
                <p className="mb-0">"Fast, clean, and on budget. What more could you ask for?"</p>
                <footer className="blockquote-footer mt-2">Anna R.</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </FadeUpSection>
  );
}

export default Testimonials;

import FadeUpSection from "../../components/animations/FadeUpSection";

function CallToAction() {
  return (
    <section className="py-5 bg-primary text-white text-center">
      <div className="container">
        <h2 className="fw-bold">Ready to Build Something Great?</h2>
        <p className="lead mb-4">Let's talk about your next construction or remodeling project.</p>
        <a href="./contact" className="btn btn-light btn-lg btn-accent">
          Contact Us Today
        </a>
      </div>
    </section>
  );
}

export default CallToAction;

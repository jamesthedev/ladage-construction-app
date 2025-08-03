import FadeUpSection from "../../components/animations/FadeUpSection";
import { useState, useEffect } from "react";
import { FaGoogle, FaYelp, FaHome } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1200, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Testimonials() {
  const [activeTab, setActiveTab] = useState("all");

  const [testimonials, setTestimonials] = useState({
    all: [
      {
        name: "Joe Howard",
        date: "18 June 2025",
        platform: "google",
        rating: 5,
        initials: "J",
        color: "bg-danger",
        content:
          "Trustworthy and integrity are the two words that come to mind...they did what they said they would in the time they said they would do it and they cleaned up.",
      },
      {
        name: "Hannah Bell",
        date: "27 May 2025",
        platform: "google",
        rating: 5,
        initials: "H",
        color: "bg-purple",
        content:
          "Awesome communication and work all the way through the process. 10/10 would use again.",
      },
      {
        name: "Beverly Kilpatrick",
        date: "27 May 2025",
        platform: "google",
        rating: 5,
        initials: "B",
        color: "bg-success",
        content: "They did an excellent job and clean up. Can’t praise them enough.",
      },
    ],
    google: [],
    yelp: [],
    home: [],
  });

  useEffect(() => {
    const fetchReviews = async () => {

      const res = await fetch(`/api/google-reviews`);
      const data = await res.json();

      const parsed = data.reviews.map((r: any) => ({
        name: r.author_name,
        date: new Date(r.time * 1000).toLocaleDateString(),
        platform: "google",
        rating: r.rating,
        initials: r.author_name.charAt(0),
        color: "bg-primary",
        content: r.text,
      }));

      setTestimonials(prev => ({ ...prev, google: parsed, all: [...parsed] }));
    };

    fetchReviews();
  }, []);


  const renderStars = (count: number) =>
    [...Array(count)].map((_, i) => (
      <i key={i} className="bi bi-star-fill text-warning me-1" />
    ));

  return (
    <FadeUpSection>
      <section className="py-5 bg-white">
        <div className="container position-relative">
          <h2 className="text-center fw-bold mb-4 text-success">
            What Our Customers Are Saying
          </h2>

          {/* Tabs */}
          <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between bg-dark text-white p-3 rounded mb-3">
            <div className="d-flex gap-3 flex-wrap">
              {['all', 'google', 'yelp', 'home'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`btn btn-link text-white text-decoration-none ${activeTab === tab ? 'fw-bold border-bottom border-white' : ''}`}
                >
                  {tab === 'google' && <FaGoogle className="me-1" />}
                  {tab === 'yelp' && <FaYelp className="me-1" />}
                  {tab === 'home' && <FaHome className="me-1" />}
                  {tab === 'all' ? 'All reviews' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <button className="btn btn-warning text-dark fw-semibold mt-2 mt-md-0">
              Write a review
            </button>
          </div>

          {/* Rating Summary */}
          <div className="bg-black text-white rounded px-3 py-2 mb-4 d-inline-block">
            <span className="me-2 fw-semibold">Excellent</span>
            {renderStars(5)}
            <span className="ms-2">4.8 | 124 reviews</span>
          </div>

          {/* Carousel */}
          <div className="position-relative">
            <Carousel
              responsive={responsive}
              infinite
              arrows
              keyBoardControl
              autoPlaySpeed={7000}
              itemClass="px-2"
              containerClass="pb-4"
              customLeftArrow={<button className="custom-arrow custom-arrow-left">‹</button>}
              customRightArrow={<button className="custom-arrow custom-arrow-right">›</button>}
            >
              {testimonials[activeTab as keyof typeof testimonials].map((t, i) => (
                <div key={i} className="card bg-dark text-white h-100 rounded">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div
                        className={`rounded-circle text-white d-flex align-items-center justify-content-center me-3 ${t.color}`}
                        style={{ width: 40, height: 40 }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <h6 className="mb-0 fw-bold">{t.name}</h6>
                        <small>{t.date}</small>
                      </div>
                      <FaGoogle className="ms-auto text-white-50" />
                    </div>
                    <div className="mb-2">{renderStars(t.rating)}</div>
                    <p className="mb-2 text-white-50">{t.content}</p>
                    <a href="#" className="text-decoration-none text-info">
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </FadeUpSection>
  );
}

export default Testimonials;
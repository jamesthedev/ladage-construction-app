import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "bootstrap/dist/css/bootstrap.min.css";
import FadeInSection from "../components/animations/FadeInSection";
import FadeUpSection from "../components/animations/FadeUpSection";
import CallToAction from "../features/home/CallToAction";


// Example images – replace with your real construction project images
const images = [
  // Framing
  { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", category: "framing" },
  { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", category: "framing" },

  // Bathroom Remodels
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a", category: "bathroom" },
  { src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", category: "bathroom" },

  // Complete Remodels
  { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", category: "remodel" },
  { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", category: "remodel" },
  { src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115", category: "remodel" },
  { src: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg", category: "remodel" },
];


const categories = [
  { key: "all", label: "All" },
  { key: "framing", label: "Framing" },
  { key: "bathroom", label: "Bathroom Remodels" },
  { key: "remodel", label: "Complete Remodels" },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="text-center mb-3">Our Work</h2>
          <p className="text-muted">
            A showcase of projects we're proud to share.
          </p>
        </div>

        {/* Category Buttons with full-width background */}
        <div style={{ width: "100vw", marginLeft: "calc(50% - 50vw)", background: "#f8f9fa" }} className="bg-light">
          <FadeInSection delay={0.4}>
            <div className="container py-3">
              {/* Category Buttons */}
              <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    className={`category-buttons btn rounded-pill ${activeCategory === cat.key
                      ? "btn-primary text-white"
                      : "btn-outline-primary btn-primary-inactive"
                      }`}
                    onClick={() => setActiveCategory(cat.key)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Masonry Gallery with full-width background */}
        <div style={{ width: "100vw", marginLeft: "calc(50% - 50vw)", background: "#f8f9fa" }}>
          <FadeUpSection delay={0.7}>
            <div className="container py-4">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {filteredImages.map((img, idx) => (
                  <div key={idx} className="mb-4">
                    <img
                      src={img.src}
                      alt={img.category}
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                ))}
              </Masonry>
            </div>
          </FadeUpSection>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default Gallery;
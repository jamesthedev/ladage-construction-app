import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';

const categories = {
  Framing: [
    'https://picsum.photos/id/1018/1000/600',
    'https://picsum.photos/id/1015/1000/600',
  ],
  'Bathroom Remodels': [
    'https://picsum.photos/id/1020/1000/600',
    'https://picsum.photos/id/1021/1000/600',
  ],
  'Complete Remodels': [
    'https://picsum.photos/id/1035/1000/600',
    'https://picsum.photos/id/1045/1000/600',
  ],
};

const sectionColors = ['#f8f9fa', '#ffffff']; // alternates: light gray, white

const OurWork: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-100">
      <div className="py-5 text-center bg-white">
        <h2 className="mb-4">Our Work</h2>
      </div>

      {Object.entries(categories).map(([title, images], i) => (
        <div key={title} style={{ backgroundColor: sectionColors[i % sectionColors.length] }}>
          <div className="container py-5 d-flex flex-column align-items-center">
            <h4 className="mb-4 text-primary">{title}</h4>
            <div style={{ maxWidth: '900px', width: '100%' }}>
              <Carousel
                autoPlay
                infiniteLoop
                interval={4000}
                showThumbs={false}
                showStatus={false}
                emulateTouch
                dynamicHeight
                onClickItem={(index) => openLightbox(images, index)}
              >
                {images.map((src, idx) => (
                  <div key={idx}>
                    <img
                      src={src}
                      alt={`${title} ${idx + 1}`}
                      className="img-fluid rounded"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      ))}

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={currentImages.map((src) => ({ src }))}
          index={currentIndex}
          on={{
            view: ({ index }) => setCurrentIndex(index),
          }}
        />
      )}
    </div>
  );
};

export default OurWork;
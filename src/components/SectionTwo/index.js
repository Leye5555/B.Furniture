import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import "./style.scss";

const SectionTwo = () => {
  return (
    <div className="section-two">
      <div className="section-two-title flex">
        <h1>Our Gallery</h1>
        <p>Beauty, Smooth and Elegant.</p>
      </div>
      <div className="section-two-grid">
        <div className="section-two-back-arrow">
          <button type="button" className="neutral-btn">
            <IoMdArrowBack />
          </button>
        </div>
        <div className="section-two-next-arrow">
          <button type="button" className="neutral-btn">
            <IoMdArrowForward />
          </button>
        </div>
        <div className="section-two-grid-item1">
          <picture>
            <source
              media="(max-width : 768px)"
              type="image/svg+xml"
              srcSet="https://res.cloudinary.com/aaeon/image/upload/v1654103310/B-furniture/images/ga1_peixfk.png"
            />
            <img
              src="https://res.cloudinary.com/aaeon/image/upload/v1654103310/B-furniture/images/ga1_peixfk.png"
              alt="Gallery"
            />
          </picture>
        </div>
        <div className="section-two-grid-item2">
          <div className="section-two-grid-subitem1">
            <picture>
              <source
                media="(max-width : 768px)"
                type="image/svg+xml"
                srcSet="https://res.cloudinary.com/aaeon/image/upload/v1654103310/B-furniture/images/gal2_fu3bno.png"
              />
              <img
                src="https://res.cloudinary.com/aaeon/image/upload/v1654103310/B-furniture/images/gal2_fu3bno.png"
                alt="Gallery"
              />
            </picture>
          </div>
          <div className="section-two-grid-subitem2">
            <picture>
              <source
                media="(max-width : 768px)"
                type="image/svg+xml"
                srcSet="https://res.cloudinary.com/aaeon/image/upload/v1654103310/B-furniture/images/gal3_jonuat.png"
              />
              <img
                src="https://res.cloudinary.com/aaeon/image/upload/v1654103310/B-furniture/images/gal3_jonuat.png"
                alt="Gallery"
              />
            </picture>
          </div>
        </div>
        <div className="section-two-grid-item3">
          <div className="section-two-grid-subitem3">
            <picture>
              <source
                media="(max-width : 768px)"
                type="image/svg+xml"
                srcSet="https://res.cloudinary.com/aaeon/image/upload/v1654103310/B-furniture/images/gal4_w5dyza.png"
              />
              <img
                src="https://res.cloudinary.com/aaeon/image/upload/v1654103310/B-furniture/images/gal4_w5dyza.png"
                alt="Gallery"
              />
            </picture>
          </div>
          <div className="section-two-grid-subitem4">
            <picture>
              <source
                media="(max-width : 768px)"
                type="image/svg+xml"
                srcSet="https://res.cloudinary.com/aaeon/image/upload/v1654103310/B-furniture/images/gal5_oebd7m.png"
              />
              <img
                src="https://res.cloudinary.com/aaeon/image/upload/v1654103310/B-furniture/images/gal5_oebd7m.png"
                alt="Gallery"
              />
            </picture>
          </div>
        </div>
        <div className="section-two-grid-item4">
          <picture>
            <source
              media="(max-width : 768px)"
              type="image/svg+xml"
              srcSet="https://res.cloudinary.com/aaeon/image/upload/v1654103310/B-furniture/images/gal6_kj8uje.png"
            />
            <img
              src="https://res.cloudinary.com/aaeon/image/upload/v1654103310/B-furniture/images/gal6_kj8uje.png"
              alt="Gallery"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;

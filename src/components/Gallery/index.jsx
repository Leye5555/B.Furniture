import React from "react";
import Navigation from "../Navigation";
import GalleryTab from "./GalleryTab";
import ScrollTop from "../ScrollTop";
import Footer from "../Footer";
import "./style.scss";

const Gallery = () => {
  return (
    <div>
      <Navigation />
      <div className="gallery-container">
        <div className="gallery-hero">
          <h1>Gallery</h1>
        </div>
        <GalleryTab />
        <div className="dec-special-wrap">
          <h1 className="text-center">Dec-Special</h1>
          <div className="dec-special-gal flex justify-center">
            <div>
              <picture>
                <source
                  media="(max-width : 768px)"
                  type="image/svg+xml"
                  srcSet="https://res.cloudinary.com/aaeon/image/upload/v1657473104/B-furniture/images/dec-sp1_eogobv.svg"
                />
                <img
                  src="https://res.cloudinary.com/aaeon/image/upload/v1657473104/B-furniture/images/dec-sp1_eogobv.svg"
                  alt="Gallery"
                />
              </picture>
            </div>
            <div>
              <picture>
                <source
                  media="(max-width : 768px)"
                  type="image/svg+xml"
                  srcSet="https://res.cloudinary.com/aaeon/image/upload/v1657473145/B-furniture/images/dec-sp2_qbdwj9.png"
                />
                <img
                  src="https://res.cloudinary.com/aaeon/image/upload/v1657473145/B-furniture/images/dec-sp2_qbdwj9.png"
                  alt="Gallery"
                />
              </picture>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ScrollTop />
    </div>
  );
};

export default Gallery;

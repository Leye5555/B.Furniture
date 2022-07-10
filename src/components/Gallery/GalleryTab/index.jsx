import React, { useState } from "react";
import "./style.scss";

const GalleryTab = () => {
  const [galleryActiveTab, setGalleryActiveTab] = useState(2);
  return (
    <>
      <nav className="gallery-tab">
        <ul type="none" className="flex">
          <li className={galleryActiveTab === 1 ? "active" : ""}>
            <button
              type="button"
              onClick={() => setGalleryActiveTab(1)}
              className="neutral-btn"
            >
              Trending
            </button>
          </li>
          <li className={galleryActiveTab === 2 ? "active" : ""}>
            <button
              type="button"
              onClick={() => setGalleryActiveTab(2)}
              className="neutral-btn"
            >
              Collections
            </button>
          </li>
          <li className={galleryActiveTab === 3 ? "active" : ""}>
            <button
              type="button"
              onClick={() => setGalleryActiveTab(3)}
              className="neutral-btn"
            >
              New Arrival
            </button>
          </li>
          <li className={galleryActiveTab === 4 ? "active" : ""}>
            <button
              type="button"
              onClick={() => setGalleryActiveTab(4)}
              className="neutral-btn"
            >
              More...
            </button>
          </li>
        </ul>
      </nav>
      <main className="gallery-main-wrap">
        <div className="gallery-grid">
          <div className="gallery-grid-item1">
            <picture>
              <source
                media="(max-width : 768px)"
                type="image/svg+xml"
                srcSet="https://res.cloudinary.com/aaeon/image/upload/v1657471394/B-furniture/images/gal7_tz3pvq.svg"
              />
              <img
                src="https://res.cloudinary.com/aaeon/image/upload/v1657471394/B-furniture/images/gal7_tz3pvq.svg"
                alt="Gallery"
              />
            </picture>
          </div>
          <div className="gallery-grid-item2">
            <div className="gallery-grid-subitem1">
              <picture>
                <source
                  media="(max-width : 768px)"
                  type="image/svg+xml"
                  srcSet="https://res.cloudinary.com/aaeon/image/upload/v1657471395/B-furniture/images/gal8_dvmceo.svg"
                />
                <img
                  src="https://res.cloudinary.com/aaeon/image/upload/v1657471395/B-furniture/images/gal8_dvmceo.svg"
                  alt="Gallery"
                />
              </picture>
            </div>
            <div className="gallery-grid-subitem2">
              <picture>
                <source
                  media="(max-width : 768px)"
                  type="image/svg+xml"
                  srcSet="https://res.cloudinary.com/aaeon/image/upload/v1657471393/B-furniture/images/gal9_imrxsy.svg"
                />
                <img
                  src="https://res.cloudinary.com/aaeon/image/upload/v1657471393/B-furniture/images/gal9_imrxsy.svg"
                  alt="Gallery"
                />
              </picture>
            </div>
          </div>
          <div className="gallery-grid-item3">
            <div className="gallery-grid-subitem3">
              <picture>
                <source
                  media="(max-width : 768px)"
                  type="image/svg+xml"
                  srcSet="https://res.cloudinary.com/aaeon/image/upload/v1657471395/B-furniture/images/gal10_dhxdch.svg"
                />
                <img
                  src="https://res.cloudinary.com/aaeon/image/upload/v1657471395/B-furniture/images/gal10_dhxdch.svg"
                  alt="Gallery"
                />
              </picture>
            </div>
            <div className="gallery-grid-subitem4">
              <picture>
                <source
                  media="(max-width : 768px)"
                  type="image/svg+xml"
                  srcSet="https://res.cloudinary.com/aaeon/image/upload/v1657471400/B-furniture/images/gal11_h9tlgr.svg"
                />
                <img
                  src="https://res.cloudinary.com/aaeon/image/upload/v1657471400/B-furniture/images/gal11_h9tlgr.svg"
                  alt="Gallery"
                />
              </picture>
            </div>
          </div>
          <div className="gallery-grid-item4">
            <picture>
              <source
                media="(max-width : 768px)"
                type="image/svg+xml"
                srcSet="https://res.cloudinary.com/aaeon/image/upload/v1657471478/B-furniture/images/gal12_gvmza4.png"
              />
              <img
                src="https://res.cloudinary.com/aaeon/image/upload/v1657471478/B-furniture/images/gal12_gvmza4.png"
                alt="Gallery"
              />
            </picture>
          </div>
        </div>
        <hr className="thematic-rule gallery" />
      </main>
    </>
  );
};

export default GalleryTab;

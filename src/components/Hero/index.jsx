import React from "react";
import Button from "../Button";
import "./style.scss";

const Hero = () => {
  return (
    <>
      <div className="hero-container flex">
        <div className="hero-content">
          <h1>
            <span className="hero-content-title-small">
              Beauty, Smooth and Elegant
            </span>
            <span className="hero-content-title-large">Modern Furnitures</span>
          </h1>
          <p>
            A home is a window into the owner’s soul and furniture is a way to
            show our personality.
          </p>
          <div className="hero-content-button-container">
            <Button
              className="hero-content-button"
              type="primary"
              content="Learn More"
            />
          </div>
        </div>
        <div className="hero-image flex">
          <div className="hero-img1" />
          <div className="hero-img2" />
          <div className="hero-img3" />
        </div>
      </div>
      <div className="section-divider">
        <div className="section-divider-line" />
      </div>
    </>
  );
};

export default Hero;

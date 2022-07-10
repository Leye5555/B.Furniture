import React from "react";
import Footer from "../../Footer";
import "./style.scss";

const TeamMembers = () => {
  return (
    <div className="team-membrs-container">
      <div className="team-membrs-text">
        <h1>Meet Our Team</h1>
        <p>
          The B.Furniture work embodies the crafts life. Yes, they&rsquo;re
          world champions, innovators and leaders, but they&rsquo;re also the
          perfect ambassadors for all things B.Furniture. Providing crucial
          feedback on all our products while traveling the globe, they&rsquo;re
          our experts at making the most out of every day.
        </p>
      </div>
      <div className="team-membrs-pic">
        <figure>
          <img
            src="https://res.cloudinary.com/aaeon/image/upload/v1656956048/B-furniture/images/brand-manager_djxn1f.svg"
            alt="brand manager"
          />
          <figcaption>
            <h1>Matthew Joe</h1>
            <p>(Brand Manager)</p>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://res.cloudinary.com/aaeon/image/upload/v1656956048/B-furniture/images/brand-strgt_cijdx3.svg"
            alt="brand strategist"
          />
          <figcaption>
            <h1>Rachael Kate</h1>
            <p>(Brand Strategist)</p>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://res.cloudinary.com/aaeon/image/upload/v1656956085/B-furniture/images/designer_ntc7mg.svg"
            alt="designer"
          />
          <figcaption>
            <h1>John Chu</h1>
            <p>(Designer)</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

const Staff = () => {
  return (
    <>
      <div className="staff-container">
        <div className="staff-ceo-img">
          <picture>
            <source
              type="image/svg+xml"
              media="(max-width : 768px)"
              src="https://res.cloudinary.com/aaeon/image/upload/v1656938132/B-furniture/images/ceo_sckthe.svg"
            />
            <img
              src="https://res.cloudinary.com/aaeon/image/upload/v1656938132/B-furniture/images/ceo_sckthe.svg"
              alt="ceo"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="staff-ceo-text">
          <h1> About Jake</h1>
          <p>
            Jake founded B.Furniture out of a Vermont barn in 1977 and dedicated
            the rest of his life to craft. He was our founder, the soul of
            B.Furnitures, the one who gave us the sport we all love so much.
          </p>
        </div>
      </div>
      <hr className="thematic-rule" />
      <TeamMembers />
      <hr className="thematic-rule" />
    </>
  );
};

export default Staff;

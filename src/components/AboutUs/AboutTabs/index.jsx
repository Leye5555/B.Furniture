/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./style.scss";

const AboutStep = ({ activeSubLink }) => {
  switch (activeSubLink) {
  case 0:
    return (
      <main className="about-tabs-main">
        <p className="about-tabs-para">
          All of our luxury furniture is handcrafted using kiln-dried hardwood
          timbers. Our top quality, solid beech wood frames are guaranteed for
          15 years for lasting assurance.
        </p>
        <p className="about-tabs-para">
          Dedicated to true British craftsmanship, we pride ourselves on
          having only the finest manufacturing practices, authentic materials
          and a steadfast commitment to quality. We continually strive to
          offer an impeccable service and a memorable buying experience.
        </p>
      </main>
    );
  case 1:
    return (
      <main className="about-tabs-main">
        <p className="about-tabs-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos
          accusamus eius quidem distinctio id maxime excepturi perferendis eum
          aut?
        </p>
        <p className="about-tabs-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus aspernatur illum quis impedit ipsa excepturi soluta in
          iste facilis doloremque deleniti enim, laudantium molestiae. Eum
          ullam deserunt esse, doloribus possimus sint error sed impedit
          maiores officia dolores nesciunt ducimus accusamus?
        </p>
      </main>
    );
  case 2:
    return (
      <main className="about-tabs-main">
        <p className="about-tabs-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos
          accusamus eius quidem distinctio id maxime excepturi perferendis eum
          aut?
        </p>
        <p className="about-tabs-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus aspernatur illum quis impedit ipsa excepturi soluta in
          iste facilis doloremque deleniti enim, laudantium molestiae. Eum
          ullam deserunt esse, doloribus possimus sint error sed impedit
          maiores officia dolores nesciunt ducimus accusamus?
        </p>
      </main>
    );
  case 3:
    return (
      <main className="about-tabs-main">
        <p className="about-tabs-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos
          accusamus eius quidem distinctio id maxime excepturi perferendis eum
          aut?
        </p>
        <p className="about-tabs-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus aspernatur illum quis impedit ipsa excepturi soluta in
          iste facilis doloremque deleniti enim, laudantium molestiae. Eum
          ullam deserunt esse, doloribus possimus sint error sed impedit
          maiores officia dolores nesciunt ducimus accusamus?
        </p>
      </main>
    );
  default:
    return null;
  }
};

const AboutTabs = () => {
  const [activeSubLink, SetActiveSubLink] = useState(0);
  return (
    <>
      <nav className="about-secondary-nav">
        <ul type="none">
          <li className={activeSubLink === 0 ? "active-sub-link" : ""}>
            <button
              onClick={() => SetActiveSubLink(0)}
              type="button"
              className="neutral-btn"
            >
              {" "}
              Who We Are
            </button>
          </li>
          <li className={activeSubLink === 1 ? "active-sub-link" : ""}>
            <button
              onClick={() => SetActiveSubLink(1)}
              type="button"
              className="neutral-btn"
            >
              Why Us?
            </button>
          </li>
          <li className={activeSubLink === 2 ? "active-sub-link" : ""}>
            <button
              onClick={() => SetActiveSubLink(2)}
              type="button"
              className="neutral-btn"
            >
              What We Do
            </button>
          </li>
          <li className={activeSubLink === 3 ? "active-sub-link" : ""}>
            <button
              onClick={() => SetActiveSubLink(3)}
              type="button"
              className="neutral-btn"
            >
              Work With Us
            </button>
          </li>
        </ul>
      </nav>
      <AboutStep activeSubLink={activeSubLink} />
    </>
  );
};

export default AboutTabs;

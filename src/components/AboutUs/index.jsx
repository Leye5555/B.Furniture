import React, { useState } from "react";
import Navigation from "../Navigation";
import "./style.scss";
import SectionOne from "./SectionOne";
import AboutTabs from "./AboutTabs";
import Staff from "./Staff";
import Footer from "../Footer";
import ScrollTop from "../ScrollTop";

const AboutUs = () => {
  return (
    <>
      <Navigation />
      <div className="about-container">
        <SectionOne />
        <AboutTabs />
        <Staff />
      </div>
      <div className="about-footer">
        <Footer />
      </div>
      <ScrollTop />
    </>
  );
};

export default AboutUs;

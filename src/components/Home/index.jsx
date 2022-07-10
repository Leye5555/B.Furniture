/* eslint-disable object-curly-newline */
import React from "react";
import {
  Navigation,
  Hero,
  SectionOne,
  SectionTwo,
  SectionThree,
  Footer,
} from "..";
import ScrollTop from "../ScrollTop";
import "./style.scss";

export default function Home() {
  return (
    <div className="home-container">
      <Navigation />
      <main className="home-main">
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

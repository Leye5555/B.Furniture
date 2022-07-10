import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer-container flex">
      <div className="footer-list-wrap">
        <h1>OUR COMPANY</h1>
        <ul type="none" className="footer-list">
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>VISIT OUR SHOWROOM</li>
          <li>TESTIMONIALS</li>
          <li>TERMS &amp; CONDITIONS</li>
          <li>PRIVACY POLICY</li>
        </ul>
      </div>
      <div className="footer-list-wrap">
        <h1>CUSTOMER SERVICE</h1>
        <ul type="none" className="footer-list">
          <li>BOOK AN APPOINTMENT</li>
          <li>FAQS</li>
          <li>SAMPLE REQUEST</li>
          <li>INTERIOR DESIGN SERVICE</li>
        </ul>
      </div>
      <div className="footer-list-wrap">
        <h1>SIGN UP FOR OUR NEWSLETTER</h1>
        <ul type="none" className="footer-list">
          <li className="footer-contact flex">
            <input type="email" placeholder="EMAIL ADDRESS" />
            <button type="button">
              <IoIosArrowForward />
            </button>
          </li>
          <li className="footer-social-title"><h1>FOLLOW US</h1></li>
          <li className="footer-social flex">
            <a href="/">
              <FaFacebookF />
            </a>
            <a href="/">
              <BsTwitter />
            </a>
            <a href="/">
              <GrInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

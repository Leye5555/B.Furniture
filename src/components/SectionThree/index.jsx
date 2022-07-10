import React from "react";
import Button from "../Button";
import "./style.scss";

const SectionThree = () => {
  return (
    <div className="section-three" id="contact-us">
      <div className="section-three-form">
        <form>
          <div className="section-three-form-title">
            <legend>Drop us a message</legend>
          </div>
          <label htmlFor="name">
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="contact-number">
            Contact Number
            <input type="number" name="contactNumber" id="contact-number" />
          </label>
          <label htmlFor="message">
            Message
            <textarea name="message" id="message" />
          </label>
          <Button className="contact-btn" content="Submit" type="primary" htmlType="button" />
        </form>
      </div>
      <div className="section-three-hero flex">
        <img
          src="https://res.cloudinary.com/aaeon/image/upload/v1654639224/B-furniture/images/form-hero_wha0ck.png"
          alt="form-hero"
        />
      </div>
    </div>
  );
};

export default SectionThree;

/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import { FcProcess } from "react-icons/fc";
import Button from "../Button";
import "./style.scss";

const SectionOne = () => {
  const [show, setShow] = useState(false);
  const [currentPara, setCurrentPara] = useState(0);
  return (
    <div className="section-one-wrap flex">
      <div className="section-one-col1">
        <h1>We create the world&rsquo;s best furniture.</h1>
        <p>
          All of our luxury furniture is handcrafted using kiln-dried hardwood
          timber.
        </p>
        <div className="section-one-col1-btn-wrap">
          <Button content="Learn More" type="primary" />
        </div>
      </div>
      <div className="section-one-grid">
        <div className="section-one-col2 flex">
          <div className="section-one-col2-row1 flex">
            <div className="section-one-icon">
              <button
                onClick={() => {
                  setCurrentPara(1);
                  setShow(() => { return (currentPara === 1 ? !show : true); });
                }}
                type="button"
                className="neutral-btn process-icon"
              >
                <FcProcess
                  className={currentPara === 1 && show ? "active" : ""}
                />
              </button>
            </div>
            <div className="section-one-text-wrap">
              <h1>
                <button
                  onClick={() => {
                    setCurrentPara(1);
                    setShow(() => { return (currentPara === 1 ? !show : true); });
                  }}
                  type="button"
                  className="neutral-btn"
                >
                  Who We Are
                </button>
              </h1>
              <p className={show && currentPara === 1 ? "visible" : "hidden"}>
                We are a PUC licensed and insured moving company.
              </p>
            </div>
          </div>
          <div className="section-one-col2-row2 flex">
            <div className="section-one-icon">
              <button
                onClick={() => {
                  setCurrentPara(2);
                  setShow(() => { return (currentPara === 2 ? !show : true); });
                }}
                type="button"
                className="neutral-btn process-icon"
              >
                <FcProcess
                  className={currentPara === 2 && show ? "active" : ""}
                />
              </button>
            </div>
            <div className="section-one-text-wrap">
              <h1>
                <button
                  onClick={() => {
                    setCurrentPara(2);
                    setShow(() => { return (currentPara === 2 ? !show : true); });
                  }}
                  type="button"
                  className="neutral-btn"
                >
                  Why Us?
                </button>
              </h1>
              <p className={show && currentPara === 2 ? "visible" : "hidden"}>
                We aim at customer satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="section-one-col3 flex">
          <div className="section-one-col3-row1 flex">
            <div className="section-one-icon">
              <button
                onClick={() => {
                  setCurrentPara(3);
                  setShow(() => { return (currentPara === 3 ? !show : true); });
                }}
                type="button"
                className="neutral-btn process-icon"
              >
                <FcProcess
                  className={currentPara === 3 && show ? "active" : ""}
                />
              </button>
            </div>
            <div className="section-one-text-wrap">
              <h1>
                <button
                  onClick={() => {
                    setCurrentPara(3);
                    setShow(() => { return (currentPara === 3 ? !show : true); });
                  }}
                  type="button"
                  className="neutral-btn"
                >
                  What We Do
                </button>
              </h1>
              <p className={show && currentPara === 3 ? "visible" : "hidden"}>
                We manufacture the best furniture there is.
              </p>
            </div>
          </div>
          <div className="section-one-col3-row2 flex">
            <div className="section-one-icon">
              <button
                onClick={() => {
                  setCurrentPara(4);
                  setShow(() => { return (currentPara === 4 ? !show : true); });
                }}
                type="button"
                className="neutral-btn process-icon"
              >
                <FcProcess
                  className={currentPara === 4 && show ? "active" : ""}
                />
              </button>
            </div>
            <div className="section-one-text-wrap">
              <h1>
                <button
                  onClick={() => {
                    setCurrentPara(4);
                    setShow(() => { return (currentPara === 4 ? !show : true); });
                  }}
                  type="button"
                  className="neutral-btn"
                >
                  Work With Us
                </button>
              </h1>
              <p className={show && currentPara === 4 ? "visible" : "hidden"}>
                We have a great work environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

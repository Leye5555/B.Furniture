/* eslint-disable prefer-template */
import React, { useEffect, useState, useRef } from "react";
import { BiUpArrowCircle } from "react-icons/bi";
import "./style.scss";

const ScrollTop = () => {
  const scrollState = useRef(0);
  const [isScroll, setIsScroll] = useState("");
  const [isVisible, setIsVisible] = useState("");
  const handleScroll = (e) => {
    setIsVisible(() => {
      return (window.scrollY >= (window.innerHeight * 1.1) ? "scroll-top-btn" : "");
    });
    if (window.scrollY - scrollState.current < -20) {
      scrollState.current = window.scrollY;
      setIsScroll("scroll-top-btn--active");
    } else if (window.scrollY - scrollState.current > 20) {
      scrollState.current = window.scrollY;
      setIsScroll("");
    }
  };
  useEffect(() => {
    scrollState.current = window.scrollY;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      type="button"
      className={isVisible + " " + isScroll}
    >
      <BiUpArrowCircle
        className={isScroll ? "scroll-top-icon--active" : "scroll-top-icon"}
      />
    </button>
  );
};

export default ScrollTop;

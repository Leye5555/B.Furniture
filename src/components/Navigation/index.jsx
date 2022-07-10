/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/images/logo.svg";
import "./style.scss";

const Navigation = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [navIconClick, setNavIconClick] = useState("");
  const navigate = useNavigate();
  const { hash } = window.location;
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact Us",
      path: "/#contact-us",
    },
  ];
  const { pathname } = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsLargeScreen(mediaQuery.matches);
    const resize = () => {
      if (mediaQuery.matches) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };
    (function handleContactUs() {
      if (hash === "#contact-us") {
        document.querySelector("#contact-us")?.scrollIntoView();
      }
    }());
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [hash]);

  const navClick = (e) => {
    setNavIconClick("nav-icon-click");
    setTimeout(() => {
      setNavIconClick("");
      setIsOpen(!isOpen);
    }, 200);
  };

  return (
    <header>
      <nav
        aria-label="primary navigation"
        className="flex justify-between align-center box"
      >
        <div className="logo">
          <Link to="/" className="flex justify-start align-center">
            <img src={logo} alt="logo" />
            <p>B.Furniture</p>
          </Link>
        </div>
        {isLargeScreen ? (
          <ul type="none" className="links-wrap flex justify-between">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={`links ${
                    pathname === link.path ? "active-link" : ""
                  }`}
                  to={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <button
            tabIndex={0}
            className="neutral-btn hamburger-btn"
            type="button"
            onClick={navClick}
          >
            <GiHamburgerMenu className={navIconClick} />
          </button>
        )}
        {/* responsive navigation */}
        {!isLargeScreen && isOpen && (
          <div
            onClick={navClick}
            className="res-wrap flex box-center align-center justify-start= f-box"
            style={{
              "--position": "fixed",
              "--margin": "0",
              "--flex-direction": "column",
            }}
          >
            {isOpen && (
              <div className="close-wrap float-r">
                {" "}
                <button
                  tabIndex={0}
                  className="neutral-btn hamburger-btn"
                  type="button"
                  onClick={navClick}
                >
                  <IoMdCloseCircle className={navIconClick} />
                </button>
              </div>
            )}
            <ul
              type="none"
              className="res-link-wrap flex align-center justify-center"
              style={{
                "--flex-direction": "column",
                "--margin": "auto",
              }}
            >
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    className={`res-links ${
                      pathname === link.path ? "active-link-res" : ""
                    }`}
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;

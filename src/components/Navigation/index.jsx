import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { IoMdCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import "./style.scss";

const Navigation = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [navIconClick, setNavIconClick] = useState("");
  const links = [{
    name: "Home",
    path: "/",
  },{
    name: "About Us",
    path: "/about-us",
  }, {
    name: "Gallery",
    path: "/gallery",
  }, {
    name: "Contact Us",
    path: "/contact-us",
  }];
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
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

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
        <div className="logo flex justify-start align-center">
          <img src={logo} alt="logo" />
          <p>B.Furniture</p>
        </div>
        {isLargeScreen ? (
          <ul type="none" className="links-wrap flex justify-between">
            {links.map((link, index) => (
              <li key={index}>
                 <Link className={`links ${pathname === link.path ? "active-link" : ""}`} to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <GiHamburgerMenu className={navIconClick} onClick={navClick} />
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
                <IoMdCloseCircle className={navIconClick} onClick={navClick} />
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
                    <Link className={`res-links ${pathname === link.path ? "active-link-res" : ""}`} to={link.path}>{link.name}</Link>
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

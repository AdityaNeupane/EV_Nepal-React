import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { FaFacebook, FaInstagramSquare, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer" id="contact">
        <div className="_footer">
          <div className="_footer_1">
            <img
              src="src/assets/images/Footerlogo.png"
              alt="logo"
              className="footer_image"
            />
            <p className="description">
              Take a peek into our office at ParasBuspark, Bharatpur.
            </p>
          </div>
          <div className="_footer_2">
            <span className="title">Contact Us</span>
            <span className="address">Address: Paras Buspark, Chitwan</span>
            <span className="email">
              <a href="mailto:evnepal@gmail.com" target="_blank">
                Email: EvNepal@gmail.com
              </a>
            </span>
            <span className="phone">Phone: 9845324***</span>
          </div>
          <div className="_footer_3_4">
            <div className="_footer_3">
              <span className="title">
                <Link style={{ cursor: "auto" }}>Quick Links</Link>
              </span>
              <Scroll to="home" spy={true} smooth={true} className="quick-link">
                <span>Home</span>
              </Scroll>
              <Scroll
                to="aboutus"
                spy={true}
                smooth={true}
                className="quick-link"
              >
                <span>AboutUs</span>
              </Scroll>
              <Scroll
                to="contactus"
                spy={true}
                smooth={true}
                className="quick-link"
              >
                <span>ContactUs</span>
              </Scroll>
            </div>
            <div className="_footer_4">
              <span className="title">Social Links</span>
              <FaFacebook
                className="social-icon"
                style={{ cursor: "pointer" }}
              />
              <FaPinterest
                className="social-icon"
                style={{ cursor: "pointer" }}
              />
              <FaInstagramSquare
                className="social-icon"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

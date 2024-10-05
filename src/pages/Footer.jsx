import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { FaFacebook, FaInstagram,  FaLinkedin, FaTwitter } from "react-icons/fa";
import logo3 from "../assets/images/logo3.jpeg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <h1 className="footer1-heading">EV Nepal</h1>
          <div className="footer1-content">
            <img src={logo3} alt="footerlogo" />
            <p> EV Nepal is the ultimate destination <br/>for everything related to electric vehicles.  </p>
          </div>
        </div>
        <div className="footer2">
          <h1 className="footer2-heading">Contacts</h1>
          <ul className="footer2-content">
            <li>WhatsApp: 9811220410</li>
            <li>E-mail: eVnepal123@gmail.com</li>
            <li>Address: Bharatpur-9, Chitwan</li>
          </ul>
        </div>
        <div className="footer3">
          <h1 className="footer3-heading">Quick Links</h1>
          <ul className="footer3-content">
            <li>Home</li>
            <li>Brand list</li>
            <li>Price list</li>
            <li>Charging Station</li>
            <li>EMI calculator</li>
            <li>About Us </li>
          </ul>
        </div>
        <div className="footer4">
          <h1 className="footer4-heading">Socials</h1>
          <div className="footer4-content">
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;

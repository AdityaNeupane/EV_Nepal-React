import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { FaFacebook, FaInstagram,  FaLinkedin, FaPhone, FaTwitter, FaEnvelope, FaMapMarker } from "react-icons/fa";
import logo3 from "../assets/images/logo3.jpeg";
// import { FaP } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <h1 className="footer1-heading">EV Nepal</h1>
          <div className="footer1-content">
            <img src={logo3} alt="footerlogo" />
            <p>  ESTD : 2024 AD </p>
          </div>
        </div>
        <div className="footer2">
          <h1 className="footer2-heading">Contact Us</h1>
          <ul className="footer2-content">
            <li><b>Contact No:</b>  <br/> +977-9811220410</li>
            <li><b>Email:</b>   <br/> eVnepal123@gmail.com</li>
            <li> <b>Address:</b> <br/>  Bharatpur-9, Chitwan</li>
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
            <li>Blogs</li>
          </ul>
        </div>

      <div className="footer4">
        <h1 className="footer4-heading">Others</h1>
        <ul className="footer4-content">
          
          <li>Help Center</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Cookie Policy</li>
          <li>Carrers</li>
          <li>Support</li>
        </ul>
          </div>

        <div className="footer5">
          <h1 className="footer5-heading">Socials</h1>
          <div className="footer5-content">
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

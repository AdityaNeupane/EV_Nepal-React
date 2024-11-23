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
          <h1 className="footer1-heading geologica-footer">EV Nepal</h1>
          <div className="footer1-content">
            <img src={logo3} alt="footerlogo" />
            <br></br>
            <p className="geologica-footer">  ESTD : 2024 AD </p>
          </div>
        </div>
        <div className="footer2">
          <h1 className="footer2-heading geologica-footer">Contact Us</h1>
          <ul className="footer2-content">
            <li className="geologica-footer"><b className="geologica-footer">Contact No:</b>  <br/> +977-9811220410</li>
            <li className="geologica-footer"><b className="geologica-footer">Email:</b>   <br/> eVnepal123@gmail.com</li>
            <li className="geologica-footer"> <b className="geologica-footer">Address:</b> <br/>  Bharatpur-9, Chitwan</li>
          </ul>
        </div>
        <div className="footer3">
          <h1 className="footer3-heading geologica-footer">Quick Links</h1>
          <ul className="footer3-content">
            <li className="geologica-footer">Home</li>
            <li className="geologica-footer">Brand list</li>
            <li className="geologica-footer">Price list</li>
            <li className="geologica-footer">Charging Station</li>
            <li className="geologica-footer">EMI calculator</li>
            <li className="geologica-footer">About Us </li>
            <li className="geologica-footer">Blogs</li>
          </ul>
        </div>

      <div className="footer4">
        <h1 className="footer4-heading geologica-footer">Others</h1>
        <ul className="footer4-content">
        
          <li className="geologica-footer">Help Center</li>
          <li className="geologica-footer">FAQ</li>
          <li className="geologica-footer">Privacy Policy</li>
          <li className="geologica-footer">Terms & Conditions</li>
          <li className="geologica-footer">Cookie Policy</li>
          <li className="geologica-footer">Carrers</li>
          <li className="geologica-footer">Support</li>
        </ul>
          </div>

        <div className="footer5">
          <h1 className="footer5-heading geologica-footer">Socials</h1>
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

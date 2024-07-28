// import React from "react";
// import "./Navbar.css";
// import logo from "../assets/images/logo.png";
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { Link as Scroll } from "react-scroll";

// const Navbar = () => {
//   const [vehiclesDropdown, setVehiclesDropdown] = useState(false);
//   const [priceListDropdown, setPriceListDropdown] = useState(false);
//   const [activeLink, setActiveLink] = useState("home");

//   const handleSetActive = (to) => {
//     setActiveLink(to);
//   };

//   return (
//     <>
//       <div className="herosection">
//         <nav className="navbar">
//           <div className="navbar-logo">
//             <img src={logo} alt="Logo" />
//           </div>
//           <ul className="navbar-menu">
//             <li className="navbar-item">
//               <Scroll
//                 to="home"
//                 spy={true}
//                 smooth={true}
//                 offset={-100}
//                 onSetActive={handleSetActive}
//                 activeClass={activeLink === "home" ? "active" : ""}
//               >
//                 <span className="nav_link">Home</span>
//               </Scroll>
//             </li>

//             <li className="navbar-item">
//               <Scroll
//                 to="aboutus"
//                 spy={true}
//                 smooth={true}
//                 offset={-100}
//                 onSetActive={handleSetActive}
//                 activeClass={activeLink === "aboutus" ? "active" : ""}
//               >
//                 <span className="nav_link">About Us</span>
//               </Scroll>
//             </li>
//             <li
//               className="navbar-item dropdown"
//               onMouseEnter={() => setVehiclesDropdown(true)}
//               onMouseLeave={() => setVehiclesDropdown(false)}
//             >
//               <div className="dropdownone">
//                 <a href="#vehicles">Vehicles</a>
//                 <a href="#">
//                   <FontAwesomeIcon icon={faCaretDown} />
//                 </a>
//               </div>

//               {vehiclesDropdown && (
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a href="#vehicle1">Electric Car</a>
//                   </li>
//                   <li>
//                     <a href="#vehicle2">Electric Scooter</a>
//                   </li>
//                   <li>
//                     <a href="#vehicle3">Electric Bike</a>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li
//               className="navbar-item dropdown"
//               onMouseEnter={() => setPriceListDropdown(true)}
//               onMouseLeave={() => setPriceListDropdown(false)}
//             >
//               <div className="dropdowntwo">
//                 <a href="#pricelist">Price List</a>
//                 <a href="#">
//                   <FontAwesomeIcon icon={faCaretDown} />
//                 </a>
//               </div>

//               {priceListDropdown && (
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a href="#price1"></a>Electric Car{" "}
//                   </li>
//                   <li>
//                     <a href="#price2"></a>Electric Scooter{" "}
//                   </li>
//                   <li>
//                     <a href="#price3"></a>Electric Bike{" "}
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li className="navbar-item">
//               <Scroll
//                 to="contactus"
//                 spy={true}
//                 smooth={true}
//                 offset={-100}
//                 onSetActive={handleSetActive}
//                 activeClass={activeLink === "contactus" ? "active" : ""}
//               >
//                 <span className="nav_link">Contact Us</span>
//               </Scroll>
//             </li>
//           </ul>

//           <li className="navbar-item search-icon">
//             <a href="#search">
//               <FontAwesomeIcon icon={faSearch} />
//             </a>
//           </li>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React from 'react'
import './Navbar.css'
 import logo from '../assets/images/logo.png'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
  

const Navbar = () => {

 const [vehiclesDropdown, setVehiclesDropdown] = useState(false);
 const [priceListDropdown, setPriceListDropdown] = useState(false);



  return (
    <>
    <div className='herosection'>
        <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#home">Home</a></li>

        <li className='navbar-item'><a href="#About">About Us</a></li>
        <li 
          className="navbar-item dropdown"
          onMouseEnter={() => setVehiclesDropdown(true)}
          onMouseLeave={() => setVehiclesDropdown(false)}
        >
            <div className='dropdownone'>
          <a href="#vehicles">Vehicles</a>
           <a href="#"><FontAwesomeIcon icon={faCaretDown} /></a>
         </div>

          {vehiclesDropdown && (
            <ul className="dropdown-menu">
              <li><a href="#vehicle1">Electric Car</a></li>
              <li><a href="#vehicle2">Electric Scooter</a></li>
              <li><a href="#vehicle3">Electric Bike</a></li>
            </ul>
          )}
        </li>
        <li 
          className="navbar-item dropdown"
          onMouseEnter={() => setPriceListDropdown(true)}
          onMouseLeave={() => setPriceListDropdown(false)}
        >
            <div className='dropdowntwo'>
          <a href="#pricelist">Price List</a>
          <a href="#"><FontAwesomeIcon icon={faCaretDown} /></a>
           </div>  

          {priceListDropdown && (
            <ul className="dropdown-menu">
              <li><a href="#price1"></a>Electric Car </li>
              <li><a href="#price2"></a>Electric Scooter </li>
              <li><a href="#price3"></a>Electric Bike </li>
            </ul>
          )}
        </li>

        
        <li className="navbar-item"><a href="#contact">Contact Us</a></li>

          </ul>

        <li className="navbar-item search-icon">
          <a href="#search"><FontAwesomeIcon icon={faSearch} /></a>
        </li>
      
    </nav>
     <div className="hero-content">
       <h1>'Your Gateway to the Electric Vehicle Revolution'</h1>
       <p>From zero emissions to <br></br> cutting-edge technology, <br></br> learn why electric vehicles <br></br> are the future of <br></br> transortation.</p>
        <div className="learn-more-container">
      <button className="learn-more-button">Learn More</button>
    </div>
     </div>
     </div>
    </>
  )
}

export default Navbar


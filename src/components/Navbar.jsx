import React from 'react'
import './Navbar.css'
 import logo from '../assets/images/logo.png'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
        <li 
          className="navbar-item dropdown"
          onMouseEnter={() => setVehiclesDropdown(true)}
          onMouseLeave={() => setVehiclesDropdown(false)}
        >
          <a href="#vehicles">Vehicles</a>
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
          <a href="#pricelist">Price List</a>
          {priceListDropdown && (
            <ul className="dropdown-menu">
              <li><a href="#price1"></a>Electric Car </li>
              <li><a href="#price2"></a>Electric Scooter </li>
              <li><a href="#price3"></a>Electric Bike </li>
            </ul>
          )}
        </li>

        <li className="navbar-item"><a href="#about">About Us</a></li>
        <li className="navbar-item"><a href="#contact">Contact Us</a></li>

          </ul>

        <li className="navbar-item search-icon">
          <a href="#search"><FontAwesomeIcon icon={faSearch} /></a>
        </li>
      
    </nav>
     <div className="hero-content">
        {/* <h1>welcome to the website</h1> */}
     </div>
     </div>
    </>
  )
}

export default Navbar


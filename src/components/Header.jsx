import React, { useState, useEffect } from 'react';
import './Clothes.css';
import phone_icon from '../assets/images/phone_icon.jpeg';  
import header_logo from '../assets/images/header_logo.avif';
import desktop_banner from '../assets/images/Desktop_Banner.webp'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCamera, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    <div key={0} className="slide">
      <span className="shop-text">SHOP</span> <span className="summer-text">SUMMER NEW ARRIVALS</span>
    </div>,
    <div key={1} className="slide">
      SUPPORT <img className="phone-icon" src={phone_icon} alt="Old-fashioned phone" /> (+92)301-922-9988 (Mon-Sat : 3PM TO 12AM)
    </div>,
    <div key={2} className="slide">
      7 DAYS RETURN & EXCHANGE <span className="underline">Terms & Conditions apply</span>
    </div>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          setIsTransitioning(false);
        }, 800);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isTransitioning, slides.length]);
  

  return (
    <div>
      <div className="slider-container">
        <div className={`slider ${isTransitioning ? 'slide-exit' : 'slide-enter'}`}>
          {slides[currentSlide]}
        </div>
      </div>
      <div className="header-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <div className="header-logo-container">
          <img className="header-logo" src={header_logo} alt="Header Logo" />
        </div>
      </div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faUser} className="header-icon" />
        <FontAwesomeIcon icon={faCamera} className="header-icon" />
        <FontAwesomeIcon icon={faShoppingBag} className="header-icon" />
      </div>
      <div className="dropdown-menu">
        <div className="dropdown">
          <span className="dropdown-title">MEN</span>
          <i className="arrow-down"></i>
        </div>
        <div className="dropdown">
          <span className="dropdown-title">WOMEN</span>
          <i className="arrow-down"></i>
        </div>
      </div>
      <img className="desktop-banner" src={desktop_banner} alt="Desktop Banner" /> 
    </div>
  );
};

export default Header;

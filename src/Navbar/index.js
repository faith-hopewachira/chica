import React, { useState, useEffect } from 'react';
import './index.css';
const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('Home');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const handleNavigationClick = (navItem) => {
    setActiveNavItem(navItem);
    setIsMenuVisible(false);
  };
  return (
    <div className="navbar">
      {!isMobileScreen && (
        <div className="navigations">
          <p
            className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''} pointer`}
            onClick={() => handleNavigationClick('Home')}
          >
            Home
          </p>
          <p
            className={`nav-item ${activeNavItem === 'About' ? 'active' : ''} pointer`}
            onClick={() => handleNavigationClick('About')}
          >
            About
          </p>
          <p
            className={`nav-item ${activeNavItem === 'Services' ? 'active' : ''} pointer`}
            onClick={() => handleNavigationClick('Episodes')}
          >
            Episodes
          </p>
        </div>
      )}
      {isMobileScreen && (
        <div className="hamburger-icon" onClick={toggleMenu}>
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      {isMobileScreen && isMenuVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleMenu}>
              &times;
            </span>
            <ol>
              <li
                className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''} pointer`}
                onClick={() => handleNavigationClick('Home')}
              >
                Home
              </li>
              <li
                className={`nav-item ${activeNavItem === 'About' ? 'active' : ''} pointer`}
                onClick={() => handleNavigationClick('About')}
              >
                About
              </li>
              <li
                className={`nav-item ${activeNavItem === 'Episodes' ? 'active' : ''} pointer`}
                onClick={() => handleNavigationClick('Episodes')}
              >
                Episodes
              </li>
            </ol>
          </div>
        </div>
      )}
       <div><button className='subscribe'>Subscribe</button></div>
    </div>
  );
};
export default Navbar;








import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ navbarRef, theme, logoTheme }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const dropdownHover = (e) => {
    const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
    const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
    if (dropdownMenu) dropdownMenu.classList.add('show');
  };

  const dropdownLeave = () => {
    const openedDropdown = document.querySelector('.navbar .dropdown-menu.show');
    if (openedDropdown) openedDropdown.classList.remove('show');
  };

  const sideDropdownHover = (e) => {
    const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
    const dropdownSide = dropdownItem.querySelector('.dropdown-side');
    if (dropdownSide) dropdownSide.classList.add('show');
  };

  const sideDropdownLeave = () => {
    const openedSideDropdown = document.querySelector('.navbar .dropdown-side.show');
    if (openedSideDropdown) openedSideDropdown.classList.remove('show');
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${theme}`} ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <div className="logo">
            {logoTheme === 'dark' && <img src="img/logo-dark.png" alt="" />}
            {logoTheme === 'light' && <img src="img/logo-light.png" alt="" />}
            {!logoTheme && <img src="img/logo-dark.png" alt="" />}
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown" onMouseMove={dropdownHover} onMouseLeave={dropdownLeave}>
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </span>
             
            </li>
            <li className="nav-item dropdown" onMouseMove={dropdownHover} onMouseLeave={dropdownLeave}>
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </span>
              <ul className="dropdown-menu">
                <li className="dropdown-item" onMouseMove={sideDropdownHover} onMouseLeave={sideDropdownLeave}>
                  <span>About <i className="fas fa-angle-right icon-arrow"></i></span>
                 
                </li>
                <li className="dropdown-item" onMouseMove={sideDropdownHover} onMouseLeave={sideDropdownLeave}>
                  <span>Services <i className="fas fa-angle-right icon-arrow"></i></span>
                 
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown mega-menu" onMouseMove={dropdownHover} onMouseLeave={dropdownLeave}>
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Portfolio
              </span>
             
            </li>
            <li className="nav-item dropdown" onMouseMove={dropdownHover} onMouseLeave={dropdownLeave}>
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blogs
              </span>
             
            </li>
            <li className="nav-item dropdown" onMouseMove={dropdownHover} onMouseLeave={dropdownLeave}>
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact
              </span>
             
            </li>
          </ul>
          <div className="social">
            <ul className="rest">
              <li>
                <a href="#0"><i className="fab fa-facebook-f"></i></a>
                <a href="#0"><i className="fab fa-twitter"></i></a>
                <a href="#0"><i className="fab fa-dribbble"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

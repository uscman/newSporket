import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = ({ navbarRef, theme, logoTheme }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 1; 
      if (!isTop && !isScrolled) {
        setIsScrolled(true);
      } else if (isTop && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <nav className={`navbar navbar-expand-lg ${theme} ${isScrolled ? 'scrolled' : ''}`} ref={navbarRef}>
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
            <li className="nav-item dropdown">
              <Link href={'/'}>
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </span>
              </Link>
            </li>
            <Link href={'/about'}>
              <li className="nav-item dropdown mega-menu">
                <span className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </span>
              </li>
            </Link>
            <Link href={'/services'}>
              <li className="nav-item dropdown mega-menu">
                <span className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </span>
              </li>
            </Link>
            <Link href={'/portfolio'}>
              <li className="nav-item dropdown mega-menu">
                <span className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Portfolio
                </span>
              </li>
            </Link>
            <Link href={'/blogs'}>
              <li className="nav-item dropdown">
                <span className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blogs
                </span>
              </li>
            </Link>
            <Link href={'/contact'}>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact
                </span>
              </li>
            </Link>
          </ul>
          <div className="social">
            <ul className="rest">
              <li>
                <Link href={'#'}><i className="fab fa-facebook-f "></i></Link>
                <Link href={'#'}><i className="fab fa-twitter  "></i></Link>
                <Link href={'#'}><i className="fab fa-linkedin "></i></Link>
                <Link href={'#'}><i className="fab fa-instagram "></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/**
 * @copyright 2024 rotiminicol
 * @license Apache-2.0
 */

import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, useSpring } from "framer-motion";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const springConfig = { stiffness: 200, damping: 20 };
  const activeBoxTop = useSpring(0, springConfig);
  const activeBoxLeft = useSpring(0, springConfig);
  const activeBoxWidth = useSpring(0, springConfig);
  const activeBoxHeight = useSpring(0, springConfig);

  const initActiveBox = () => {
    if (lastActiveLink.current) {
      activeBoxTop.set(lastActiveLink.current.offsetTop);
      activeBoxLeft.set(lastActiveLink.current.offsetLeft);
      activeBoxWidth.set(lastActiveLink.current.offsetWidth);
      activeBoxHeight.set(lastActiveLink.current.offsetHeight);
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBoxTop.set(event.target.offsetTop);
    activeBoxLeft.set(event.target.offsetLeft);
    activeBoxWidth.set(event.target.offsetWidth);
    activeBoxHeight.set(event.target.offsetHeight);
    
    // Close mobile menu when a link is clicked
    setMobileMenuOpen(false);
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link",
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-50 bg-zinc-900/80 backdrop-blur-md shadow-md transition-all duration-300 ${
        navOpen ? "active py-4" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between md:justify-center">
        {/* Mobile hamburger menu */}
        <button 
          className="md:hidden text-zinc-200 focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Logo or site name (if needed) */}
        <div className="md:hidden font-bold text-sky-400">RN</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block relative">
          <div className="flex items-center gap-6 md:gap-8">
            {navItems.map(({ label, link, className, ref }, key) => (
              <motion.a
                key={key}
                href={link}
                ref={ref}
                className={`${className} relative px-4 py-2 text-zinc-200 text-sm md:text-base font-medium hover:text-sky-400 transition-colors duration-300 ${
                  className.includes("active") ? "text-sky-400" : ""
                }`}
                onClick={activeCurrentLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.a>
            ))}
            <motion.div
              ref={activeBox}
              className="active-box absolute bg-sky-500/20 rounded-lg border border-sky-500/50 shadow-lg"
              style={{
                top: activeBoxTop,
                left: activeBoxLeft,
                width: activeBoxWidth,
                height: activeBoxHeight,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-md shadow-lg py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4">
              {navItems.map(({ label, link, className }, key) => (
                <motion.a
                  key={key}
                  href={link}
                  className={`block py-3 px-4 text-zinc-200 text-base font-medium hover:text-sky-400 transition-colors duration-300 border-b border-zinc-800 ${
                    className.includes("active") ? "text-sky-400" : ""
                  }`}
                  onClick={activeCurrentLink}
                  whileTap={{ scale: 0.98 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
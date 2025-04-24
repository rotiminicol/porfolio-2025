import  { useState } from "react";
import { motion } from "framer-motion";
import logo from "/assets/JAMES.png";

import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const logoVariants = {
    rest: { scale: 1, rotate: 0, boxShadow: "0 0 0 rgba(255, 255, 255, 0)" },
    hover: {
      scale: 1.1,
      rotate: 10,
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    rest: { scale: 1, rotateX: 0, rotateY: 0, boxShadow: "0 0 0 rgba(255, 255, 255, 0)" },
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.95, rotateX: 0, rotateY: 0 },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-[#1A1A1A] to-[#333333]/90 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 z-0">
        <div className="animated-background"></div>
      </div>

      <style>
        {`
          .animated-background {
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
            animation: pulse 15s ease-in-out infinite;
            transform: perspective(1000px) rotateX(10deg);
          }
          @keyframes pulse {
            0%, 100% { transform: perspective(1000px) rotateX(10deg) scale(1); opacity: 0.3; }
            50% { transform: perspective(1000px) rotateX(10deg) scale(1.1); opacity: 0.5; }
          }
        `}
      </style>

      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo */}
        <motion.h1
          variants={logoVariants}
          initial="rest"
          whileHover="hover"
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <a href="/" className="logo">
            <img
              src={logo}
              width={40}
              height={40}
              alt="Rotimi Nicol"
              className="transform-gpu"
            />
          </a>
        </motion.h1>

        {/* Navbar */}
        <div className="relative md:justify-self-center">
          <motion.button
            className="menu-btn md:hidden text-white"
            onClick={() => setNavOpen((prev) => !prev)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="material-symbols-rounded text-2xl">
              {navOpen ? "close" : "menu"}
            </span>
          </motion.button>
          <Navbar navOpen={navOpen} />
        </div>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end p-3 rounded-lg bg-gradient-to-r from-[#333333] to-[#1A1A1A] text-white font-montserrat font-semibold uppercase tracking-wide hover:bg-gradient-to-r hover:from-[#444444] hover:to-[#2A2A2A] backdrop-blur-md border border-white/10"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          Contact Me
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
/**
 * @copyright 2025 rotiminicol
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";
import { motion } from "framer-motion";
import logo from "/assets/JAMES.png";

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/rotiminicol'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rotimi-obabiyi-nicol-2a6252265/'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/NicolRotimi_'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rotiminicol/'
  },
];

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const linkVariants = {
    rest: { scale: 1, color: "#A0A0A0" },
    hover: {
      scale: 1.05,
      color: "#FFFFFF",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const logoVariants = {
    rest: { scale: 1, rotate: 0, boxShadow: "0 0 0 rgba(255, 255, 255, 0)" },
    hover: {
      scale: 1.1,
      rotate: 10,
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <footer className="section relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#333333] overflow-hidden">
      {/* Animated Background */}
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
            transform: perspective(1000px) rotateX(20deg);
          }
          @keyframes pulse {
            0%, 100% { transform: perspective(1000px) rotateX(20deg) scale(1); opacity: 0.5; }
            50% { transform: perspective(1000px) rotateX(20deg) scale(1.1); opacity: 0.7; }
          }
        `}
      </style>

      <motion.div
        className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div className="mb-8 lg:mb-10" variants={itemVariants}>
            <h2 className="headline-1 mb-6 sm:mb-8 lg:max-w-[12ch] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg font-montserrat text-center lg:text-left">
              Lets Build Together
            </h2>
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <ButtonPrimary
                href="mailto:rotiminicol117@gmail.com"
                label="Start Project"
                icon="chevron_right"
                classes="w-full sm:w-auto p-3 rounded-lg bg-gradient-to-r from-[#333333] to-[#1A1A1A] text-white font-montserrat font-semibold uppercase tracking-wide hover:bg-gradient-to-r hover:from-[#444444] hover:to-[#2A2A2A]"
              />
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-4 lg:pl-10 xl:pl-20"
            variants={itemVariants}
          >
            {/* Sitemap */}
            <div className="text-center sm:text-left">
              <p className="mb-3 text-white font-inter font-medium">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <motion.li
                    key={key}
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a
                      href={href}
                      className="block text-sm py-2 sm:py-1 font-inter"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="text-center sm:text-left">
              <p className="mb-3 text-white font-inter font-medium">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <motion.li
                    key={key}
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm py-2 sm:py-1 font-inter"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-0 pt-8 sm:pt-10 mb-4 sm:mb-8 border-t border-zinc-800/50 mt-8"
          variants={itemVariants}
        >
          <motion.a
            href="/"
            className="logo"
            variants={logoVariants}
            initial="rest"
            whileHover="hover"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <img
              src={logo}
              width={40}
              height={40}
              alt="Rotimi Nicol Logo"
              className="transform-gpu w-10 h-10"
            />
          </motion.a>
          <p className="text-gray-300 text-xs sm:text-sm font-inter">
            © 2025 <span className="text-white">rotiminicol</span>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
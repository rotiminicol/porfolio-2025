/**
 * @copyright 2024 rotiminicol
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";
import Hero3 from "/assets/hero 3.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="pt-24 sm:pt-28 lg:pt-36 bg-gradient-to-b from-zinc-900 to-zinc-800 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 items-center lg:grid lg:grid-cols-2 lg:gap-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 lg:mb-0"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <figure className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-sky-400 shadow-lg">
              <img
                src={Hero3}
                width={48}
                height={48}
                alt="Rotimi Nicol portrait"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm font-medium">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 max-w-full sm:max-w-[20ch] lg:max-w-[15ch] mt-3 sm:mt-5 mb-6 sm:mb-8 lg:mb-10 leading-tight"
          >
            Building Scalable Modern Websites for the Future
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <ButtonPrimary
              href="/resume.pdf"
              download
              label="Download CV"
              icon="download"
              className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-300 mb-3 sm:mb-0"
            />
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
              className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hidden sm:block relative mx-auto sm:max-w-md lg:max-w-full"
        >
          <div className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] mx-auto lg:ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[40px] sm:rounded-[60px] overflow-hidden shadow-2xl">
            <motion.img
              src={Hero3}
              width={656}
              height={800}
              alt="Rotimi Nicol"
              className="w-full transform hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, }}
            />
          </div>
          <div className="absolute inset-0 bg-sky-500/10 rounded-[40px] sm:rounded-[60px] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
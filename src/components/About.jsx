/**
 * @copyright 2024 rotiminicol
 * @license Apache-2.0
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const aboutItems = [
  {
    label: 'Projects Completed',
    number: 30,
  },
  {
    label: 'Years of Experience',
    number: 5,
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="section py-8 sm:py-12 md:py-16 bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="bg-zinc-800/70 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-sm border border-zinc-700/50"
        >
          <motion.p
            variants={itemVariants}
            className="text-zinc-200 mb-6 md:mb-10 text-base sm:text-lg md:text-xl lg:max-w-[70ch] leading-relaxed"
          >
            Welcome! Im Rotimi, a passionate Software Developer specializing in creating visually captivating and highly functional websites. By blending creativity with technical expertise, I bring your vision to life with digital masterpieces that shine in both design and performance.
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-6 md:gap-10">
            {aboutItems.map(({ label, number }, key) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="group relative"
              >
                <div className="flex items-center mb-2 transform group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-zinc-100">{number}</span>
                  <span className="text-sky-400 text-xl sm:text-2xl md:text-4xl font-semibold">+</span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">{label}</p>
                <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
              </motion.div>
            ))}

            <motion.img
              variants={itemVariants}
              src="/assets/JAMES.png"
              width={40}
              height={40}
              alt="logo"
              className="mt-4 sm:mt-0 sm:ml-auto w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
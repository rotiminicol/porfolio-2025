/**
 * @copyright 2025 rotiminicol
 * @license Apache-2.0
 */

import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ imgSrc, title, tags, projectLink, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: index * 0.15 },
    },
  };

  const overlayVariants = {
    initial: { opacity: 0, y: '100%', rotateX: 20 },
    hover: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden bg-black/50 border border-white/10 backdrop-blur-md break-inside-avoid mb-6 transform-gpu"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 300)}
      role="article"
      aria-label={`Project: ${title}`}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02, z: 50 }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] z-10">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.1) rotateX(5deg)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Overlay Content */}
      <motion.div
        className="absolute inset-0 bg-black/80 p-6 flex flex-col justify-end z-20 font-inter"
        variants={overlayVariants}
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-md">{title}</h3>
        <p className="text-sm sm:text-base text-gray-200 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
        >
          View Project
          <span className="ml-2 material-symbols-rounded text-base">arrow_outward</span>
        </a>
      </motion.div>

      {/* Title on non-hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3
          className="text-xl sm:text-2xl font-bold text-white font-montserrat transition-opacity duration-300 drop-shadow-md"
          style={{ opacity: isHovered ? 0 : 1 }}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
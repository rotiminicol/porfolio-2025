/**
 * @copyright 2024 rotiminicol
 * @license Apache-2.0
 */

import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  description,
  classes
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative p-3 sm:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 hover:from-zinc-700/80 hover:to-zinc-800/90 active:bg-zinc-700/60 shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden ${classes}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 300)}
    >
      {/* Image container */}
      <figure className="aspect-video rounded-lg mb-3 sm:mb-4 overflow-hidden relative">
        <img 
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}></div>
      </figure>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2 sm:mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1 line-clamp-1">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 mb-2 sm:mb-3">
              {description}
            </p>
          </div>

          {/* Arrow icon */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 transition-transform group-hover:scale-110">
            <span className="material-symbols-rounded text-sm sm:text-base">
              arrow_outward
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          {tags.slice(0, 3).map((label, key) => (
            <span 
              key={key}
              className="h-6 sm:h-7 text-[10px] sm:text-xs font-medium text-sky-400 bg-sky-400/10 grid items-center px-2 sm:px-3 rounded-md sm:rounded-lg backdrop-blur-sm"
            >
              {label.split(':')[0]} {/* Show only the category before colon */}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="h-6 sm:h-7 text-[10px] sm:text-xs font-medium text-zinc-400 bg-zinc-400/10 grid items-center px-2 sm:px-3 rounded-md sm:rounded-lg">
              +{tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-sky-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

      {/* Clickable overlay */}
      <a 
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
        aria-label={`View ${title} project`}
      ></a>
    </div>
  )
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default ProjectCard;
/**
 * @copyright 2024 rotiminicol
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, brandColor, classes }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center gap-3 sm:gap-4 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 sm:p-4 bg-zinc-800/50 hover:bg-zinc-700/70 transition-all group w-full ${classes}`}
    >
      <figure
        className="rounded-lg overflow-hidden w-12 h-12 sm:w-14 sm:h-14 p-2 sm:p-3 transition-all mb-2 sm:mb-0"
        style={{
          backgroundColor: `${brandColor}20`, // 20% opacity of brand color
        }}
      >
        <img
          src={imgSrc}
          width={36}
          height={36}
          alt={label}
          className="object-contain group-hover:scale-110 transition-transform duration-300 w-full h-full"
          style={{ filter: `drop-shadow(0 0 4px ${brandColor}80)` }} // Subtle glow effect
        />
      </figure>

      <div className="text-center sm:text-left w-full">
        <h3
          className="text-zinc-100 font-semibold text-base sm:text-lg group-hover:text-zinc-100 transition-colors"
          style={{ color: brandColor }}
        >
          {label}
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm group-hover:text-zinc-200 transition-colors">
          {desc}
        </p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  brandColor: PropTypes.string,
  classes: PropTypes.string,
};

export default SkillCard;
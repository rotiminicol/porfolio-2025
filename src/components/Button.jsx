/**
 * @copyright 2025 rotiminicol
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * Primary Button
 */
const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes = "",
  download
}) => {
  const isDownload = Boolean(download);

  // Animation variants
  const buttonVariants = {
    rest: { scale: 1, rotateX: 0, rotateY: 0, boxShadow: "0 0 0 rgba(255, 255, 255, 0)" },
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { scale: 0.95, rotateX: 0, rotateY: 0 }
  };

  const content = (
    <>
      {label}
      {icon ? (
        <span className="material-symbols-rounded ml-2" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={isDownload ? undefined : target}
        download={isDownload}
        className={`btn btn-primary font-montserrat ${classes}`}
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={`btn btn-primary font-montserrat ${classes}`}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {content}
    </motion.button>
  );
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  download: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
};

/**
 * Outline Button
 */
const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes = ""
}) => {
  // Animation variants
  const buttonVariants = {
    rest: { scale: 1, rotateX: 0, rotateY: 0, boxShadow: "0 0 0 rgba(255, 255, 255, 0)" },
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { scale: 0.95, rotateX: 0, rotateY: 0 }
  };

  const content = (
    <>
      {label}
      {icon ? (
        <span className="material-symbols-rounded ml-2" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        className={`btn btn-outline font-montserrat ${classes}`}
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={`btn btn-outline font-montserrat ${classes}`}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {content}
    </motion.button>
  );
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};

export { ButtonPrimary, ButtonOutline };
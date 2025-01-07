/**
 * @copyright 2024 rotiminicol
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

/**
 * Primary Button
 */
const ButtonPrimary = ({
   href,
   target = '_self',  
   label,
   icon,
   classes,
   download
 }) => {
   const isDownload = Boolean(download); // Determine if this is a download action
 
   if (href) {
     return (
       <a
         href={href}
         target={isDownload ? undefined : target} // Only set target if it's not a download
         download={isDownload} // Set download attribute conditionally
         className={"btn btn-primary " + classes}
       >
         {label}
         {icon ? (
           <span className="material-symbols-rounded" aria-hidden="true">
             {icon}
           </span>
         ) : undefined}
       </a>
     );
   } else {
     return (
       <button className={"btn btn-primary " + classes}>
         {label}
         {icon ? (
           <span className="material-symbols-rounded" aria-hidden="true">
             {icon}
           </span>
         ) : undefined}
       </button>
     );
   }
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
   classes
 }) => {
   if (href) {
     return (
       <a
         href={href}
         target={target}
         className={"btn btn-outline " + classes}
       >
         {label}
         {icon ? (
           <span className="material-symbols-rounded" aria-hidden="true">
             {icon}
           </span>
         ) : undefined}
       </a>
     );
   } else {
     return (
       <button className={"btn btn-outline " + classes}> {/* Fixed className */}
         {label}
         {icon ? (
           <span className="material-symbols-rounded" aria-hidden="true">
             {icon}
           </span>
         ) : undefined}
       </button>
     );
   }
 };
 

ButtonOutline.propTypes = {
   label: PropTypes.string.isRequired,
   href: PropTypes.string,
   target: PropTypes.string,
   icon: PropTypes.string,
   classes: PropTypes.string
};

export {
   ButtonPrimary,
   ButtonOutline
};

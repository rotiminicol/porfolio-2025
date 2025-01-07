/**
 * @copyright 2024 rotiminicol
 * @license Apache-2.0
 */

/**
 * node modules
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsao pluggings
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Component
 */
import ReviewCard from "./ReviewCard";


const reviews = [
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Muhyideen',
    imgSrc: '/assets/muhyideen.png',
    company: 'Bfree Africa',
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Moses',
    imgSrc: '/assets/moses.png',
    company: 'Bfree Africa',
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Sandra Welli',
    imgSrc: '/assets/sandra.png',
    company: 'Cowris',
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Wale Abba',
    imgSrc: '/assets/wale.png',
    company: 'Cowris',
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'George Evripidou',
    imgSrc: '/assets/people-3.jpg',
    company: 'Castley group of companies',
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Opeyemi',
    imgSrc: '/assets/ope.png',
    company: 'Castley Group of Companies',
  },
];



const Review = () => {

  useGSAP(()=> {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub:true,
      },
      x: '-1000'
    })
  });

  return (
    <section
     id="reviews"
     className="section overflow-hidden"
    >
      <div className="container">
         <h2 className="headline-2 mb-8 reveal-up">
         What our customers say
         </h2>

         <div className="scrub-slide flex items-stretch gap-3 w-fit">
            {reviews.map(({ content, name, imgSrc, company }, key)=>(
               <ReviewCard 
               key={key}
               name={name}
               imgSrc={imgSrc}
               company={company}
               content={content}
               />
            ))}

         </div>
      </div>

    </section>
  )
}

export default Review
/**
 * @copyright 2024 rotiminicol
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/assets/scientific calculator.png',
    title: 'Scientific Calculator',
    tags: ['React','javascript'],
    projectLink: 'https://scientific-calculator-tau-six.vercel.app/',
  },
  {
    imgSrc: '/assets/coffeshop.png',
    title: 'Oigio Cafe',
    tags: ['React', 'Javascript'],
    projectLink: 'https://oigio-cafe.vercel.app/',
  },
  {
    imgSrc: '/assets/casino278.png',
    title: 'Online Traffic King',
    tags: ['Ad Company','React', 'Javascript'],
    projectLink: 'https://onlinetrafficking.vercel.app/',
  },
  {
    imgSrc: '/assets/prestige.png',
    title: 'Prestige Motors',
    tags: ['Web-design','React', 'Javascript'],
    projectLink: 'https://prestige-motors.vercel.app/',
  },
  {
    imgSrc: '/assets/cowris.png',
    title: 'Cowris Technologies',
    tags: ['Fintech','Vue.js','Typescript'],
    projectLink: 'https://cowris.com/',
  },
  {
    imgSrc: '/assets/v-card.png',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Motion'],
    projectLink: 'https://james-portfolio-two.vercel.app',
  },
   {
    imgSrc: '/assets/sehder.png',
    title: 'Sedher Health',
    tags: ['Next.js', 'Typescript', 'Tailwindcss'],
    projectLink: 'https://sedher-frontend-woad.vercel.app/',
  },
  {
    imgSrc: '/assets/andre.png',
    title: 'Andres D Jason Car Rentals',
    tags: ['Web-design', 'Motion', 'React', 'Javascript'],
    projectLink: 'https://andres-d-jason-car-rentals.vercel.app/',
  },
];


const Work = () => {
  return (
    <section
    id="work"
    className="section"
    >
      <div className="container">
      <h2 className="headline-2 mb-8 reveal-up">
      My portfolio highlights
      </h2>

      <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
         {works.map(({ imgSrc, title, tags, projectLink }, index) => (
            <ProjectCard 
            key={index}
            imgSrc={imgSrc}
            title={title}
            tags={tags}
            projectLink={projectLink}
            classes='reveal-up'
            />
         ))}
      </div>

      </div>
    </section>
  )
}

export default Work;

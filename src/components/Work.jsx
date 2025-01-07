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
    tags: ['React', 'Vite', 'javascript'],
    projectLink: 'scientific-calculator-tau-six.vercel.app',
  },
  {
    imgSrc: '/assets/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: 'https://github.com/rotiminicol',
  },
  {
    imgSrc: '/assets/project-3.jpg',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: 'https://github.com/rotiminicol',
  },
  {
    imgSrc: '/assets/project-4.jpg',
    title: 'Real estate website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/rotiminicol',
  },
  {
    imgSrc: '/assets/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/rotiminicol',
  },
  {
    imgSrc: '/assets/v-card.png',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Motion'],
    projectLink: 'https://james-portfolio-two.vercel.app',
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

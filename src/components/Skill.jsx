/**
 * @copyright 2024 rotiminicol
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";



const skillItem = [
  {
    imgSrc: '/assets/figma.svg',
    label: 'Figma',
    desc: 'Design tool',
  },
  {
    imgSrc: '/assets/framer.svg',
    label: 'Framer Motion',
    desc: 'Animation Library',
  },
  {
    imgSrc: '/assets/css3.svg',
    label: 'CSS',
    desc: 'User Interface',
  },
  {
    imgSrc: '/assets/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
  {
    imgSrc: '/assets/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction',
  },
  {
    imgSrc: '/assets/react.svg',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: '/assets/nextdotjs.svg',
    label: 'Next.js',
    desc: 'React Framework',
  },
  {
    imgSrc: '/assets/vuedotjs.svg',
    label: 'Vue.js',
    desc: 'Framework',
  },
  {
    imgSrc: '/assets/react.svg',
    label: 'React Native',
    desc: 'Mobile Framework',
  },
  {
    imgSrc: '/assets/flutter.svg',
    label: 'Flutter',
    desc: 'Mobile SDK',
  },
  {
    imgSrc: '/assets/flutter.svg',
    label: 'FlutterFlow',
    desc: 'No-code Mobile Builder',
  },
  {
    imgSrc: '/assets/firebase.svg',
    label: 'Firebase',
    desc: 'Mobile Backend',
  },
  {
    imgSrc: '/assets/supabase.svg',
    label: 'Superbase',
    desc: 'Mobile Backend',
  },
  {
    imgSrc: '/assets/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server',
  },
  {
    imgSrc: '/assets/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework',
  },
  {
    imgSrc: '/assets/php.svg',
    label: 'PHP',
    desc: 'Server Language',
  },
  {
    imgSrc: '/assets/laravel.svg',
    label: 'Laravel',
    desc: 'PHP Framework',
  },
  {
    imgSrc: '/assets/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database',
  },
  {
    imgSrc: '/assets/appwrite.svg',
    label: 'Appwrite',
    desc: 'Database',
  },
  {
    imgSrc: '/assets/redis.svg',
    label: 'Redis',
    desc: 'In-memory Database',
  },
          
      
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Essential Tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, index) =>
              (
                <SkillCard
                  key={index}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  classes="reveal-up"
                />
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skill;

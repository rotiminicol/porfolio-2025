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
    tags: ['Frontend: React.js', 'Language: JavaScript', 'No Backend', 'No Database'],
    projectLink: 'https://scientific-calculator-tau-six.vercel.app/',
    description: 'A fully functional scientific calculator built using React. Handles complex mathematical operations and has a clean, responsive UI.',
  },
  {
    imgSrc: '/assets/coffeshop.png',
    title: 'Oigio Cafe',
    tags: ['Frontend: React.js', 'Language: JavaScript', 'No Backend', 'No Database'],
    projectLink: 'https://oigio-cafe.vercel.app/',
    description: 'A sleek landing page for a coffee shop, developed with React. Features dynamic sections, animations, and mobile responsiveness.',
  },
  {
    imgSrc: '/assets/casino278.png',
    title: 'Online Traffic King',
    tags: ['Frontend: React.js', 'Language: JavaScript', 'Backend: None', 'Database: None'],
    projectLink: 'https://onlinetrafficking.vercel.app/',
    description: 'Ad agency web app designed to showcase digital marketing services. Built with React for seamless navigation and responsive UI.',
  },
  {
    imgSrc: '/assets/prestige.png',
    title: 'Prestige Motors',
    tags: ['Frontend: React.js', 'Language: JavaScript', 'Backend: None', 'Database: None'],
    projectLink: 'https://pestrige-motors.vercel.app/',
    description: 'A car dealership website that presents vehicle listings in a modern UI. Developed using React with a focus on performance and user experience.',
  },
  {
    imgSrc: '/assets/cowris.png',
    title: 'Cowris Technologies',
    tags: ['Frontend: Vue.js', 'Language: TypeScript', 'Backend: None', 'Database: None'],
    projectLink: 'https://cowris.com/',
    description: 'A fintech company site developed in Vue.js and TypeScript. Showcases financial solutions and integrates smooth animations.',
  },
  {
    imgSrc: '/assets/v-card.png',
    title: 'vCard Personal Portfolio',
    tags: ['Frontend: HTML/CSS/JavaScript', 'Motion: GSAP or Framer Motion', 'No Backend', 'No Database'],
    projectLink: 'https://james-portfolio-two.vercel.app',
    description: 'A dynamic portfolio site with animation effects and a professional layout. Great for showcasing personal brand and skills.',
  },
  {
    imgSrc: '/assets/sehder.png',
    title: 'Sedher Health',
    tags: ['Frontend: Next.js', 'Language: TypeScript', 'Styling: TailwindCSS', 'Backend: API Routes (Next.js)', 'Database: Supabase'],
    projectLink: 'https://sedher-frontend-woad.vercel.app/',
    description: 'A healthtech platform built using Next.js. Features clean UI, reusable components, and scalability in mind.',
  },
  {
    imgSrc: '/assets/andre.png',
    title: 'Andres D Jason Car Rentals',
    tags: ['Frontend: React.js', 'Motion: Framer Motion', 'Language: JavaScript', 'Backend: None', 'Database: None'],
    projectLink: 'https://andres-d-jason-car-rentals.vercel.app/',
    description: 'A car rental service website with smooth motion effects and interactive booking interface. Built with React and styled for modern appeal.',
  },
  {
    imgSrc: '/assets/rent.png',
    title: 'Rent Up',
    tags: ['Frontend: React.js', 'Language: JavaScript', 'Styling: CSS', 'Backend: None', 'Database: None'],
    projectLink: 'https://real-estate-two-gamma-25.vercel.app/',
    description: 'A real estate platform for property listings and rentals. Created with React, focusing on search, filters, and intuitive UI.',
  },
  {
    imgSrc: '/assets/ng.png',
    title: 'Arigo.NG',
    tags: ['Frontend: React.js', 'Backend: Node.js + Express', 'Database: MongoDB'],
    projectLink: 'https://arigo-ng.onrender.com',
    description: 'An eCommerce website for gadgets. Built using React for frontend and Node.js for backend APIs. Includes product catalog, cart, and checkout.',
  },
  {
    imgSrc: '/assets/pay.png',
    title: 'Arigo Pay',
    tags: ['Frontend: React.js', 'Backend: Node.js + Express', 'Database: MongoDB'],
    projectLink: 'https://arigopay.onrender.com',
    description: 'A modern online banking platform with React and Node.js. Includes account management, transactions, and user authentication.',
  },
  {
    imgSrc: '/assets/mia.png',
    title: 'Miamour',
    tags: ['Frontend: React.js', 'Backend: Node.js', 'Database: MongoDB'],
    projectLink: 'https://miamour.me/',
    description: 'A matchmaking platform designed for marriage. Developed in React with features like profile matching, chatting, and search filters.',
  },
  {
    imgSrc: '/assets/ije.png',
    title: 'Ijeuwa',
    tags: ['Frontend: React.js', 'Backend: Node.js', 'Database: MongoDB'],
    projectLink: 'https://ijeuwa.com/',
    description: 'A social media app created with React. Includes timeline, posts, likes, comments, and friend connections.',
  },
  {
    imgSrc: '/assets/kud.png',
    title: 'Kuda Bank App Clone',
    tags: ['Platform: Mobile Web App', 'Frontend: FlutterFlow', 'Backend: Flutter', 'Database: Supabase'],
    projectLink: 'https://github.com/rotiminicol?tab=repositories',
    description: 'A mobile-first clone of the Kuda bank app. Built using React for the frontend and Node.js for backend operations like transactions and account management. Designed to mimic the native app experience with responsive design.',
  },
  {
    imgSrc: '/assets/ub.png',
    title: 'Uber App Clone',
    tags: ['Platform: Mobile Web App', 'Frontend: flutterflow', 'Backend: flutter', 'Database: Firebase'],
    projectLink: 'https://github.com/rotiminicol?tab=repositories',
    description: 'A ride-hailing app clone optimized for mobile devices. Features booking flow, map integration, and driver-rider logic using React and Node.js. Designed to feel like the real Uber mobile app.',
  },
  {
    imgSrc: '/assets/clo.png',
    title: 'Clot',
    tags: ['Platform: Mobile Web App', 'Frontend: flutterflow', 'Backend: flutter', 'Database: firebase'],
    projectLink: 'https://github.com/rotiminicol?tab=repositories',
    description: 'A fashion-focused mobile eCommerce app. Built with React and Node.js, the app supports product browsing, cart, and checkout with a fast, touch-friendly interface that mimics a native shopping experience.',
  },
  
];


const Work = () => {
  return (
    <section id="work" className="section py-12 md:py-20 bg-zinc-900/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto px-2 sm:px-0">
            Explore my diverse projects, each crafted with attention to detail and cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((project, index) => (
            <ProjectCard 
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              tags={project.tags}
              description={project.description}
              projectLink={project.projectLink}
              classes={`delay-${index % 3 * 100}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center px-2 sm:px-0">
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 mb-4 md:mb-6">
            Want to see more details about my development process?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-sky-500 hover:bg-sky-600 text-white text-sm sm:text-base font-medium rounded-lg transition-colors active:scale-95"
          >
            Lets Discuss Your Project
            <span className="ml-2 material-symbols-rounded text-lg">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Work;
/**
 * @copyright 2025 rotiminicol
 * @license Apache-2.0
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/assets/scientific calculator.png',
    title: 'Scientific Calculator',
    tags: ['React.js', 'JavaScript'],
    projectLink: 'https://scientific-calculator-tau-six.vercel.app/',
    description: 'A powerful scientific calculator built with React.js, featuring complex mathematical operations, a responsive UI, and real-time computation for seamless user interaction.',
    category: 'Frontend',
  },
  {
    imgSrc: '/assets/coffeshop.png',
    title: 'Oigio Cafe',
    tags: ['React.js', 'JavaScript'],
    projectLink: 'https://oigio-cafe.vercel.app/',
    description: 'A vibrant coffee shop landing page crafted with React.js. Includes dynamic sections, fluid animations, and a mobile-first design to drive customer engagement.',
    category: 'Frontend',
  },
  {
    imgSrc: '/assets/casino278.png',
    title: 'Online Traffic King',
    tags: ['React.js', 'JavaScript'],
    projectLink: 'https://onlinetrafficking.vercel.app/',
    description: 'A digital marketing platform built with React.js, showcasing ad agency services with a responsive interface and optimized navigation for client conversions.',
    category: 'Frontend',
  },
  {
    imgSrc: '/assets/prestige.png',
    title: 'Prestige Motors',
    tags: ['React.js', 'JavaScript'],
    projectLink: 'https://pestrige-motors.vercel.app/',
    description: 'A car dealership website developed with React.js, offering a modern UI for vehicle listings, optimized for performance and user-friendly browsing.',
    category: 'Frontend',
  },
  {
    imgSrc: '/assets/cowris.png',
    title: 'Cowris Technologies',
    tags: ['Vue.js', 'TypeScript'],
    projectLink: 'https://cowris.com/',
    description: 'A fintech website built with Vue.js and TypeScript, showcasing financial solutions with smooth animations and a professional, scalable design.',
    category: 'Frontend',
  },
  {
    imgSrc: '/assets/v-card.png',
    title: 'vCard Personal Portfolio',
    tags: ['HTML/CSS/JS', 'Framer Motion'],
    projectLink: 'https://james-portfolio-two.vercel.app',
    description: 'A dynamic portfolio site with engaging animations and a professional layout, perfect for showcasing personal branding and technical skills.',
    category: 'Frontend',
  },
  {
    imgSrc: '/assets/sehder.png',
    title: 'Sedher Health',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Supabase'],
    projectLink: 'https://sedher-frontend-woad.vercel.app/',
    description: 'A healthtech platform powered by Next.js and Supabase, featuring a clean UI, reusable components, and a scalable backend for healthcare solutions.',
    category: 'Full Stack',
  },
  {
    imgSrc: '/assets/andre.png',
    title: 'Andres D Jason Car Rentals',
    tags: ['React.js', 'Framer Motion', 'JavaScript'],
    projectLink: 'https://andres-d-jason-car-rentals.vercel.app/',
    description: 'A car rental service with interactive booking and smooth Framer Motion effects, built with React.js for a modern, user-centric experience.',
    category: 'Frontend',
  },
  {
    imgSrc: '/assets/rent.png',
    title: 'Rent Up',
    tags: ['React.js', 'JavaScript', 'CSS'],
    projectLink: 'https://real-estate-two-gamma-25.vercel.app/',
    description: 'A real estate platform for property listings and rentals, built with React.js, featuring intuitive search, filters, and a clean UI.',
    category: 'Frontend',
  },
  {
    imgSrc: '/assets/ng.png',
    title: 'Arigo.NG',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    projectLink: 'https://arigo-ng.onrender.com',
    description: 'An eCommerce gadget store with React.js and Node.js, offering a product catalog, cart, and secure checkout for a seamless shopping experience.',
    category: 'Full Stack',
  },
  {
    imgSrc: '/assets/pay.png',
    title: 'Arigo Pay',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    projectLink: 'https://arigopay.onrender.com',
    description: 'A secure online banking platform using React.js and Node.js, with features for account management, transactions, and user authentication.',
    category: 'Full Stack',
  },
  {
    imgSrc: '/assets/mia.png',
    title: 'Miamour',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    projectLink: 'https://miamour.me/',
    description: 'A matchmaking platform for marriage, built with React.js, featuring profile matching, real-time chat, and advanced search filters.',
    category: 'Full Stack',
  },
  {
    imgSrc: '/assets/ije.png',
    title: 'Ijeuwa',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    projectLink: 'https://ijeuwa.com/',
    description: 'A social media app with React.js, including timeline, posts, likes, comments, and friend connections for community engagement.',
    category: 'Full Stack',
  },
  {
    imgSrc: '/assets/kud.png',
    title: 'Kuda Bank App Clone',
    tags: ['FlutterFlow', 'Flutter', 'Supabase'],
    projectLink: 'https://github.com/rotiminicol?tab=repositories',
    description: 'A mobile-first Kuda bank app clone built with FlutterFlow, mimicking native app features like transactions and account management.',
    category: 'Mobile',
  },
  {
    imgSrc: '/assets/ub.png',
    title: 'Uber App Clone',
    tags: ['FlutterFlow', 'Flutter', 'Firebase'],
    projectLink: 'https://github.com/rotiminicol?tab=repositories',
    description: 'A ride-hailing app clone optimized for mobile, with booking flows, map integration, and driver-rider logic for a native-like experience.',
    category: 'Mobile',
  },
  {
    imgSrc: '/assets/clo.png',
    title: 'Clot',
    tags: ['FlutterFlow', 'Flutter', 'Firebase'],
    projectLink: 'https://github.com/rotiminicol?tab=repositories',
    description: 'A fashion trafik mobile app with FlutterFlow, supporting product browsing, cart, and checkout with a touch-friendly interface.',
    category: 'Mobile',
  },
  {
    imgSrc: '/assets/pay.png',
    title: 'Arigo Pay Mobile App',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'Provider'],
    projectLink: 'https://github.com/rotiminicol/arigopay-mobile',
    description: 'A Flutter-based mobile banking app for Arigo Pay, featuring secure login, transaction history, fund transfers, and a native-like UX.',
    category: 'Mobile',
  },
  {
    imgSrc: '/assets/mia.png',
    title: 'Miamour Mobile App',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'JWT'],
    projectLink: 'https://github.com/rotiminicol/miamour-mobile',
    description: 'A Flutter-based mobile app for Miamour matchmaking, with profile creation, match suggestions, real-time chat, and premium features.',
    category: 'Mobile',
  },
];

const Work = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Frontend", "Full Stack", "Mobile"];

  const filteredWorks = filter === "All" ? works : works.filter((work) => work.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 md:py-32 min-h-screen overflow-hidden from-[#1A1A1A] to-[#333333]">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="animated-background"></div>
      </div>

      <style>
        {`
          .animated-background {
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, rgba(0, 0, 0, 0.1) 0%, transparent 70%);
            animation: pulse 15s ease-in-out infinite;
            transform: perspective(1000px) rotateX(20deg);
          }
          @keyframes pulse {
            0%, 100% { transform: perspective(1000px) rotateX(20deg) scale(1); opacity: 0.5; }
            50% { transform: perspective(1000px) rotateX(20deg) scale(1.1); opacity: 0.7; }
          }
        `}
      </style>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg font-montserrat">
            My Projects
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mt-4 leading-relaxed font-inter">
            A curated showcase of cutting-edge solutions, blending modern tech with elegant design.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium font-inter transition-all duration-300 ${
                filter === category
                  ? "bg-white text-black shadow-lg"
                  : "bg-black/50 text-white border border-white/20 hover:bg-white/10 backdrop-blur-md"
              }`}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredWorks.map((project, index) => (
              <ProjectCard
                key={project.title}
                imgSrc={project.imgSrc}
                title={project.title}
                tags={project.tags}
                description={project.description}
                projectLink={project.projectLink}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
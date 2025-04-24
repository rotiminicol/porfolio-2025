/**
 * @copyright 2024 rotiminicol
 * @license Apache-2.0
 */
import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Components
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Skill from "./components/Skill";
import Work from "./components/Work";

const App = () => {
  useGSAP(() => {
    // Mobile-friendly animation adjustments
    const isMobile = window.innerWidth < 768;
    const revealOffset = isMobile ? 50 : 100;

    // Reveal up elements with mobile-optimized settings
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.fromTo(element, 
        {
          y: isMobile ? 40 : 100,
          opacity: 0
        },
        {
          ScrollTrigger: {
            trigger: element,
            start: `top bottom-=${revealOffset}`,
            end: 'top center',
            toggleActions: 'play none none reverse',
            markers: false
          },
          y: 0,
          opacity: 1,
          duration: isMobile ? 0.8 : 1.2,
          ease: 'power3.out'
        }
      );
    });

    // Mobile-optimized page load animation
    gsap.fromTo('main > section',
      {
        opacity: 0,
        y: isMobile ? 30 : 50
      },
      {
        opacity: 1,
        y: 0,
        duration: isMobile ? 0.8 : 1,
        stagger: isMobile ? 0.1 : 0.2,
        ease: 'power2.out'
      }
    );
  });

  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 1.5, 
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.5
    }}>
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
        <Header className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-sm" />
        
        <main className="flex-1 overflow-x-hidden">
          {/* Hero Section */}
          <section className="w-full min-h-[100vh] md:min-h-[90vh]">
            <Hero />
          </section>
          
          {/* About Section */}
          <section className="w-full py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
            <About />
          </section>
          
          {/* Skills Section */}
          <section className="w-full py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-zinc-800/50 rounded-xl my-6">
            <Skill />
          </section>
          
          {/* Work Section */}
          <section className="w-full py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
            <Work />
          </section>
          
          {/* Reviews Section */}
          <section className="w-full py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-zinc-800/50 rounded-xl my-6">
            <Review />
          </section>
          
          {/* Contact Section */}
          <section className="w-full py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
            <Contact />
          </section>
        </main>
        
        <Footer className="bg-zinc-900 border-t border-zinc-700" />
      </div>
    </ReactLenis>
  );
};

export default App;
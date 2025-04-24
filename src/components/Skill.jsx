/**
 * @copyright 2024 rotiminicol
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillItem = [
  {
    imgSrc: "https://cdn.simpleicons.org/figma/0A0A0A",
    label: "Figma",
    desc: "Design tool",
    brandColor: "#F24E1E",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/framer/0A0A0A",
    label: "Framer Motion",
    desc: "Animation Library",
    brandColor: "#0055FF",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/css3/0A0A0A",
    label: "CSS",
    desc: "User Interface",
    brandColor: "#1572B6",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/tailwindcss/0A0A0A",
    label: "TailwindCSS",
    desc: "User Interface",
    brandColor: "#38B2AC",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/javascript/0A0A0A",
    label: "JavaScript",
    desc: "Interaction",
    brandColor: "#F7DF1E",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/react/0A0A0A",
    label: "React",
    desc: "Framework",
    brandColor: "#61DAFB",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/nextdotjs/0A0A0A",
    label: "Next.js",
    desc: "React Framework",
    brandColor: "#000000",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/vuedotjs/0A0A0A",
    label: "Vue.js",
    desc: "Framework",
    brandColor: "#4FC08D",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/react/0A0A0A",
    label: "React Native",
    desc: "Mobile Framework",
    brandColor: "#61DAFB",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/flutter/0A0A0A",
    label: "Flutter",
    desc: "Mobile SDK",
    brandColor: "#02569B",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/flutter/0A0A0A",
    label: "FlutterFlow",
    desc: "No-code Mobile Builder",
    brandColor: "#02569B",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/firebase/0A0A0A",
    label: "Firebase",
    desc: "Mobile Backend",
    brandColor: "#FFCA28",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/supabase/0A0A0A",
    label: "Supabase",
    desc: "Mobile Backend",
    brandColor: "#3ECF8E",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/nodedotjs/0A0A0A",
    label: "NodeJS",
    desc: "Web Server",
    brandColor: "#339933",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/express/0A0A0A",
    label: "ExpressJS",
    desc: "Node Framework",
    brandColor: "#000000",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/php/0A0A0A",
    label: "PHP",
    desc: "Server Language",
    brandColor: "#777BB4",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/laravel/0A0A0A",
    label: "Laravel",
    desc: "PHP Framework",
    brandColor: "#FF2D20",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/mongodb/0A0A0A",
    label: "MongoDB",
    desc: "Database",
    brandColor: "#47A248",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/appwrite/0A0A0A",
    label: "Appwrite",
    desc: "Database",
    brandColor: "#F02E65",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/redis/0A0A0A",
    label: "Redis",
    desc: "In-memory Database",
    brandColor: "#DC382D",
  },
];

const Skill = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="section py-16 bg-gradient-to-b from-zinc-800 to-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4"
          >
            Essential Tools I Use
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-zinc-300 mt-3 mb-8 max-w-[50ch] text-lg leading-relaxed"
          >
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
          >
            {skillItem.map(({ imgSrc, label, desc, brandColor }, index) => (
              <motion.div key={index} variants={cardVariants}>
                <SkillCard
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  brandColor={brandColor}
                  classes="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
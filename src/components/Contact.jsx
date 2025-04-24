/**
 * @copyright 2025 rotiminicol
 * @license Apache-2.0
 */

import { motion } from "framer-motion";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  const formFieldVariants = {
    rest: { 
      scale: 1,
      borderColor: "rgba(255, 255, 255, 0.1)"
    },
    focus: {
      scale: 1.02,
      borderColor: "rgba(100, 200, 255, 0.5)",
      boxShadow: "0 0 0 2px rgba(100, 200, 255, 0.2)",
      transition: { duration: 0.2 }
    }
  };

  const socialLinks = [
    {
      href: 'https://github.com/rotiminicol',
      icon: 'code',
      label: 'GitHub'
    },
    {
      href: "https://www.linkedin.com/in/rotimi-obabiyi-nicol-2a6252265/",
      icon: 'person',
      label: 'LinkedIn'
    },
    {
      href: 'https://x.com/NicolRotimi',
      icon: 'chat',
      label: 'Twitter'
    },
    {
      href: 'https://www.instagram.com/rotiminicol/',
      icon: 'photo_camera',
      label: 'Instagram'
    },
  ];

  return (
    <section
    id="contact"
    className="relative py-20 md:py-32 from-[#1A1A1A] to-[#333333] overflow-hidden bg-gradient-to-br"
  >
    {/* Diagonal gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#333333] z-0"></div>
  
    {/* Floating grid pattern */}
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
    </div>
  
    {/* Animated floating elements */}
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-500/10"
          style={{
            width: `${100 + i * 40}px`,
            height: `${100 + i * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 50 * (i % 2 === 0 ? 1 : -1)],
            y: [0, 30 * (i % 3 === 0 ? 1 : -1)],
            rotate: 360,
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          Ready to <span className="text-cyan-400">Collaborate?</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Let’s turn your ideas into reality. Reach out and let’s create something
          amazing together.
        </motion.p>
      </div>
  
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div className="space-y-8" variants={itemVariants}>
          <div className="p-8 rounded-xl bg-[#2A2A2A] backdrop-blur-md border border-[#444444]">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-rounded text-cyan-400">mail</span>
              Email Me
            </h3>
            <a
              href="mailto:rotiminicol117@gmail.com"
              className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              rotiminicol117@gmail.com
            </a>
          </div>
  
          <div className="p-8 rounded-xl bg-[#2A2A2A] backdrop-blur-md border border-[#444444]">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-rounded text-cyan-400">
                phone_iphone
              </span>
              Call Me
            </h3>
            <a
              href="tel:+2348100000000"
              className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              +234 8162048090
            </a>
          </div>
  
          <div className="p-8 rounded-xl bg-[#2A2A2A] backdrop-blur-md border border-[#444444]">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-rounded text-cyan-400">share</span>
              Connect With Me
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#333333] hover:bg-cyan-500/10 border border-[#444444] hover:border-cyan-400/30 text-white transition-all"
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                    backgroundColor: "rgba(6, 182, 212, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  <span className="material-symbols-rounded">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
  
        {/* Contact Form */}
        <motion.form
          action="https://getform.io/f/byvvzopa"
          method="POST"
          className="p-8 rounded-xl bg-[#2A2A2A] backdrop-blur-md border border-[#444444]"
          variants={itemVariants}
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#333333] border border-[#444444] text-white placeholder-gray-400 focus:outline-none"
                variants={formFieldVariants}
                initial="rest"
                whileFocus="focus"
                placeholder="John Doe"
              />
            </div>
  
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#333333] border border-[#444444] text-white placeholder-gray-400 focus:outline-none"
                variants={formFieldVariants}
                initial="rest"
                whileFocus="focus"
                placeholder="john@example.com"
              />
            </div>
  
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#333333] border border-[#444444] text-white placeholder-gray-400 focus:outline-none"
                variants={formFieldVariants}
                initial="rest"
                whileFocus="focus"
                placeholder="Tell me about your project..."
              ></motion.textarea>
            </div>
  
            <motion.button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
              whileHover={{
                y: -2,
                scale: 1.02,
                boxShadow: "0 4px 15px rgba(6, 182, 212, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="material-symbols-rounded">send</span>
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  </section>
  );
};

export default Contact;
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiLightningBolt, HiSparkles, HiAcademicCap } from "react-icons/hi";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats: any[] = [];

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen py-24 relative overflow-hidden bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent font-poppins"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Passionate developer crafting innovative solutions
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left: Image - CIRCULAR WITH PURPLE NEON GLOW */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0 }}
            className="relative flex items-center justify-center"
          >
            {/* Neon glow behind frame - matching gradient colors */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.7) 0%, rgba(99, 102, 241, 0.5) 40%, rgba(139, 92, 246, 0.4) 60%, transparent 80%)',
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main circular container */}
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
              {/* Gradient border matching "gradient-text" colors */}
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600">
                {/* Inner circle with animated glow background */}
                <motion.div 
                  className="w-full h-full rounded-full overflow-hidden p-2"
                  style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(139, 92, 246, 0.3) 100%)',
                  }}
                  animate={{
                    background: [
                      'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(139, 92, 246, 0.3) 100%)',
                      'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.3) 50%, rgba(99, 102, 241, 0.4) 100%)',
                      'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(139, 92, 246, 0.3) 100%)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Image container with white background - NO HOVER EFFECTS */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800/50 bg-white">
                    <Image
                      src="/mephoto.png"
                      alt="Ismail Elaziz"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover object-top scale-110"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0 }}
              className="absolute -bottom-6 -right-2 sm:-right-6 glass px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-blue-500/30 shadow-2xl"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white font-semibold text-sm sm:text-base">Available for Work</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-6">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-poppins"
              >
                I&apos;m{" "}
                <span className="gradient-text">Ismail Elaziz</span>
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0 }}
                className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed"
              >
                <p>
                  A passionate <span className="text-blue-400 font-semibold">Software Engineer</span> specializing in{" "}
                  <span className="text-blue-400 font-semibold">Full Stack Development</span>,{" "}
                  <span className="text-blue-400 font-semibold">DevOps</span>, and{" "}
                  <span className="text-blue-400 font-semibold">SAP Integration</span>.
                </p>
                <p>
                  I specialize in building scalable, high-performance applications using modern technologies like{" "}
                  <span className="text-indigo-400">React</span>, <span className="text-indigo-400">Angular</span>,{" "}
                  <span className="text-indigo-400">Spring Boot</span>, <span className="text-indigo-400">Spring Cloud</span>,
                  and <span className="text-indigo-400">Flutter</span>. My expertise spans the entire development lifecycle,
                  from architecture design to deployment and maintenance.
                </p>
                <p>
                  With a strong foundation in both frontend and backend technologies, I create elegant solutions
                  that solve complex business problems. I&apos;m driven by innovation, quality code, and delivering
                  exceptional user experiences that make a real impact.
                </p>
              </motion.div>
            </div>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Soft Skills:</h4>
              <div className="space-y-3">
                {[
                  "Adaptability & Flexibility",
                  "Time Management",
                  "Team Collaboration",
                  "Active Listening",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Let&apos;s Build Something Amazing
                <HiSparkles />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Languages removed per user request */}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
              }}
              className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 mb-4"
              >
                <stat.icon className="text-white text-2xl" />
              </motion.div>
              <motion.h4
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0 }}
              >
                {stat.value}
              </motion.h4>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

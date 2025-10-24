"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaReact,
  FaJava,
  FaAngular,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFlutter,
  SiSap,
} from "react-icons/si";
import { HiSparkles } from "react-icons/hi";

// Tech icons - Your Custom Tech Stack
const techIcons = [
  { Icon: SiSpringboot, color: "#6DB33F", name: "Spring Boot", delay: 0, size: 54 },
  { Icon: FaJava, color: "#007396", name: "Java JEE", delay: 0.1, size: 56 },
  { Icon: FaAngular, color: "#DD0031", name: "Angular", delay: 0.2, size: 54 },
  { Icon: FaReact, color: "#61DAFB", name: "React", delay: 0.3, size: 54 },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript", delay: 0.4, size: 52 },
  { Icon: SiFlutter, color: "#02569B", name: "Flutter", delay: 0.5, size: 54 },
  { Icon: SiMysql, color: "#4479A1", name: "MySQL", delay: 0.6, size: 52 },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB", delay: 0.7, size: 52 },
  { Icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL", delay: 0.8, size: 52 },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript", delay: 0.9, size: 52 },
  { Icon: SiSap, color: "#0FAAFF", name: "SAP", delay: 1.0, size: 52 },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    // Set actual window size on client
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </div>

      {/* Subtle elegant background with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main soft glow with mouse parallax */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          style={{
            x: useTransform(mouseX, [0, windowSize.width], [-30, 30]),
            y: useTransform(mouseY, [0, windowSize.height], [-30, 30]),
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-blue-500/30 rounded-full blur-[150px]"
        />
        
        {/* Secondary subtle glow with opposite parallax */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          style={{
            x: useTransform(mouseX, [0, windowSize.width], [30, -30]),
            y: useTransform(mouseY, [0, windowSize.height], [30, -30]),
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-slate-500/20 via-indigo-500/15 to-purple-500/20 rounded-full blur-[130px]"
        />

        {/* Accent glow - very subtle */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-blue-400/20 to-indigo-500/20 rounded-full blur-[110px]"
        />

        {/* Subtle neuron-like particles moving slowly */}
        {[...Array(20)].map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = Math.random() * 100;
          const endY = Math.random() * 100;
          
          return (
            <motion.div
              key={`neuron-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 3 === 0 
                  ? 'rgba(100, 116, 139, 0.4)' // slate
                  : i % 3 === 1 
                  ? 'rgba(99, 102, 241, 0.3)' // indigo
                  : 'rgba(148, 163, 184, 0.35)', // lighter slate
                boxShadow: '0 0 6px currentColor',
              }}
              animate={{
                x: [`${startX}vw`, `${endX}vw`, `${startX}vw`],
                y: [`${startY}vh`, `${endY}vh`, `${startY}vh`],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 25 + 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          );
        })}

        {/* Animated White Bubbles */}
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 60 + 20; // 20-80px
          const startX = Math.random() * 100;
          const startY = 100 + Math.random() * 20; // Start below screen
          const duration = Math.random() * 10 + 15; // 15-25s
          
          return (
            <motion.div
              key={`bubble-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${startX}%`,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(2px)',
                boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
              }}
              animate={{
                y: ['100vh', '-20vh'],
                x: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.2, 0.8, 1],
                opacity: [0, 0.6, 0.8, 0.4, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 10,
              }}
            />
          );
        })}
      </div>

      <div className="w-full relative z-10">
        <div className="flex flex-col lg:flex-row justify-start items-center gap-12 lg:gap-16" style={{ paddingLeft: 'clamp(1rem, 10vw, 15rem)' }}>
          
          {/* Left side - Text content */}
          <div className="text-left space-y-10 w-full lg:w-auto lg:max-w-4xl lg:pr-12">
            {/* Name with 3D effect and gradient - MUCH BIGGER */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.h1 
                className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-bold mb-6 font-poppins leading-[0.9] relative"
                whileHover={{ scale: 1.02 }}
              >
                <span className="relative inline-block">
                  <motion.span 
                    className="relative z-10 bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent"
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
                    Ismail
                  </motion.span>
                  <motion.span
                    className="absolute top-0 left-0 bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent opacity-40 blur-md"
                    animate={{ 
                      x: [0, 2, -2, 0],
                      y: [0, -2, 2, 0],
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ 
                      x: { duration: 3, repeat: Infinity },
                      y: { duration: 3, repeat: Infinity },
                      backgroundPosition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    Ismail
                  </motion.span>
                </span>
                <br />
                <span className="relative inline-block">
                  <motion.span 
                    className="relative z-10 bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    Elaziz
                  </motion.span>
                  <motion.span
                    className="absolute top-0 left-0 bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent opacity-40 blur-md"
                    animate={{ 
                      x: [0, -2, 2, 0],
                      y: [0, 2, -2, 0],
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ 
                      x: { duration: 3, repeat: Infinity, delay: 0.5 },
                      y: { duration: 3, repeat: Infinity, delay: 0.5 },
                      backgroundPosition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    Elaziz
                  </motion.span>
                </span>
              </motion.h1>
            </motion.div>

            {/* Tagline with interactive hover - BIGGER */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 font-poppins leading-relaxed">
                <span className="gradient-text font-bold">Software Development</span>
                <br />
                <span className="text-white">& SAP Enthusiast</span>
              </p>
            </motion.div>

            {/* Interactive CTA buttons - BIGGER */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 text-xl rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 font-semibold text-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2"
              >
                View Projects
                <HiSparkles />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 text-xl rounded-xl glass border border-slate-500/40 font-medium text-gray-200 hover:border-indigo-500/50 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Get in Touch
                <span>→</span>
              </motion.a>
            </motion.div>

            {/* Handwritten note with glow - BIGGER */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-400 italic text-xl flex items-center gap-2"
              style={{ fontFamily: "cursive" }}
            >
              <HiSparkles className="text-yellow-400" />
              Read my published blogs.
            </motion.p>
          </div>

          {/* Right side - Animated Tech Icons SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center w-[700px] h-[700px] flex-shrink-0 lg:ml-auto"
            style={{ perspective: "2000px" }}
          >
            {/* Animated connecting paths between icons */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
                </linearGradient>
              </defs>
              {techIcons.map((_, index) => {
                const angle = (index * 360) / techIcons.length;
                const nextAngle = ((index + 1) * 360) / techIcons.length;
                const radius = 260;
                
                const x1 = 350 + Math.cos((angle * Math.PI) / 180) * radius;
                const y1 = 350 + Math.sin((angle * Math.PI) / 180) * radius;
                const x2 = 350 + Math.cos((nextAngle * Math.PI) / 180) * radius;
                const y2 = 350 + Math.sin((nextAngle * Math.PI) / 180) * radius;
                
                return (
                  <motion.line
                    key={`line-${index}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      pathLength: { duration: 2, delay: index * 0.1 },
                      opacity: { duration: 3, repeat: Infinity, delay: index * 0.2 }
                    }}
                  />
                );
              })}
            </svg>

            {/* Animated tech icons with real SVG and enhanced animations */}
            {techIcons.map((tech, index) => {
              const angle = (index * 360) / techIcons.length;
              const radius = 260;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    x: x - 30,
                    y: y - 30,
                    zIndex: 10,
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ 
                    scale: 1, 
                    rotate: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                >
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      },
                      rotate: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }
                    }}
                  >
                    {/* Animated glow behind icon */}
                    <motion.div
                      className="absolute inset-0 rounded-full blur-xl"
                      style={{
                        background: tech.color,
                        opacity: 0.3,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                      }}
                    />
                    
                    {/* SVG Icon with enhanced styling */}
                    <motion.div
                      className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-3 rounded-2xl border border-slate-700/30"
                      whileHover={{
                        borderColor: tech.color,
                        boxShadow: `0 0 30px ${tech.color}40`,
                      }}
                      style={{
                        boxShadow: `0 4px 20px ${tech.color}20`,
                      }}
                    >
                      <tech.Icon 
                        size={60} 
                        style={{ 
                          color: tech.color,
                          filter: `drop-shadow(0 0 8px ${tech.color}80)`,
                        }} 
                      />
                      
                      {/* Animated tooltip - BIGGER and MORE VISIBLE */}
                      <motion.div
                        className="absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        initial={{ y: 10, scale: 0.9 }}
                        whileHover={{ y: 0, scale: 1 }}
                      >
                        <div className="bg-slate-900/98 backdrop-blur-md px-5 py-3 rounded-xl border-2 border-slate-700/70 whitespace-nowrap text-base font-semibold shadow-2xl">
                          <span style={{ color: tech.color }}>{tech.name}</span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}


          </motion.div>
        </div>
      </div>
    </section>
  );
}

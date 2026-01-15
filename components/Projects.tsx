"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaJava } from "react-icons/fa";
import { 
  SiWordpress, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiStripe, 
  SiTailwindcss,
  SiDjango,
  SiPython,
  SiPostgresql,
  SiBootstrap,
  SiShopify,
  SiJavascript,
  SiSpringboot,
  SiAngular,
  SiMysql,
  SiFirebase,
  SiOpenstreetmap
} from "react-icons/si";

// Tech icon mapping
const techIcons: { [key: string]: any } = {
  "WordPress": SiWordpress,
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "MongoDB": SiMongodb,
  "Stripe": SiStripe,
  "Tailwind CSS": SiTailwindcss,
  "Django": SiDjango,
  "Python": SiPython,
  "PostgreSQL": SiPostgresql,
  "Bootstrap": SiBootstrap,
  "Shopify": SiShopify,
  "JavaScript": SiJavascript,
  "Spring Boot": SiSpringboot,
  "Angular": SiAngular,
  "MySQL": SiMysql,
  "Firebase": SiFirebase,
  "Java": FaJava,
  "OpenStreetMap": SiOpenstreetmap,
};

const projects = [
  {
    title: "AIA Maroc",
    description:
      "Professional corporate website for AIA Morocco, featuring modern design, responsive layout, and comprehensive business solutions showcase.",
    images: ["/projects/aia-project.png"],
    image: "/projects/aia-project.png",
    tech: ["WordPress"],
    live: "https://aia.ma/",
    isCMS: true,
  },
  {
    title: "Stintouch Agency",
    description:
      "Creative digital agency website with stunning visuals, portfolio showcase, and interactive elements for client engagement.",
    images: ["/projects/stintouch.jpg", "/projects/stintouch2.jpg"],
    image: "/projects/stintouch.jpg",
    tech: ["WordPress"],
    live: "https://stintouch.ma/",
    isCMS: true,
  },

  {
    title: "Hotello",
    description:
      "Modern hotel booking and management platform featuring real-time availability, secure reservations, and seamless user experience for guests and administrators.",
    images: ["/projects/hotello.png", "/projects/hotello2.png", "/projects/hotello3.png"],
    image: "/projects/hotello.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "PhD Tracking Portal",
    description:
      "Full-stack academic platform managing doctoral registrations, re-registrations, and thesis defenses with secure authentication and role-based access.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
    tech: ["Spring Boot", "Angular", "MySQL", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text font-poppins">
            Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
              }
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
              }}
              className="relative group cursor-pointer h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
            >
              {/* Animated gradient glow */}
              <motion.div 
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Card with smooth scroll effect */}
              <div className="relative h-full rounded-3xl shadow-2xl overflow-hidden border-4 border-[#1d505d] bg-white">
                {/* Image container with scroll on hover - slower for AIA, faster for others */}
                <div className="relative h-full overflow-hidden cursor-n-resize group/scroll">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={2400}
                    className={`w-full h-full object-cover object-top transition-all ease-in-out group-hover/scroll:object-bottom ${
                      project.title === "AIA Maroc" ? "duration-[12s]" : "duration-[4s]"
                    }`}
                  />
                </div>
                
                {/* Project info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/50 to-transparent"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Tech badges with icons */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech) => {
                      const IconComponent = techIcons[tech];
                      return (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs rounded-full font-medium flex items-center gap-1.5"
                        >
                          {IconComponent && <IconComponent className="text-sm" />}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    {!project.isCMS && project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/90 rounded-xl text-gray-900 font-semibold hover:bg-white transition-all"
                      >
                        <FaGithub size={18} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${project.isCMS || !project.github ? 'flex-1' : 'flex-1'} flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all`}
                      >
                        <FaExternalLinkAlt size={16} />
                        <span className="text-sm">Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

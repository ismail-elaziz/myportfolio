"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaJava,
  FaAngular,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFlutter,
  SiKubernetes,
  SiSap,
} from "react-icons/si";

const skills = [
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", category: "Backend" },
  { name: "Java JEE", icon: FaJava, color: "#007396", category: "Backend" },
  { name: "Angular", icon: FaAngular, color: "#DD0031", category: "Frontend" },
  { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B", category: "Mobile" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Database" },
  { name: "Docker", icon: FaDocker, color: "#2496ED", category: "DevOps" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", category: "DevOps" },
  { name: "Git", icon: FaGitAlt, color: "#F05032", category: "DevOps" },
  { name: "SAP", icon: SiSap, color: "#0FAAFF", category: "Backend" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text font-poppins">
            Skills
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Making apps with modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={
                isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.5, rotateY: -180 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.15, 
                y: -15,
                rotateY: 10,
                rotateX: 10,
              }}
              className="relative group"
              style={{ perspective: "1000px" }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-300"></div>
              
              {/* Card */}
              <div className="relative glass p-6 rounded-xl flex flex-col items-center justify-center space-y-3 border border-purple-500/20 group-hover:border-cyan-500/50 transition-all duration-300 shadow-lg">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotateZ: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <skill.icon 
                    size={52} 
                    style={{ 
                      color: skill.color,
                      filter: 'drop-shadow(0 0 8px currentColor)',
                    }} 
                  />
                </motion.div>
                <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {skill.name}
                </span>
                
                {/* Hexagon background */}
                <div className="absolute inset-0 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="50,5 90,30 90,70 50,95 10,70 10,30" fill="currentColor" className="text-purple-500" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

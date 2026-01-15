"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase, HiAcademicCap, HiCalendar, HiLocationMarker } from "react-icons/hi";
import Image from "next/image";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      type: "work",
      title: "Full Stack Developer - Summer Internship",
      company: "CASA BAIA, Casablanca",
      logo: "/projects/casabaia.png",
      period: "July 2025 - August 2025",
      duration: "2 months",
      description: "Developed a full-stack web platform for citizen complaint tracking with responsive interfaces for citizens and administrators, featuring real-time analytics and data visualization.",
      stack: ["Angular 17", "Spring Boot", "H2", "JWT", "CSS", "Material Design"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      type: "work",
      title: "Full Stack Developer - Summer Internship",
      company: "PLUTUS, Mohammedia",
      logo: "/projects/plutus.jfif",
      period: "July 2024 - September 2024",
      duration: "1 month",
      description: "Built an MVC web application for inventory and order management with modern, responsive user interface and efficient data handling.",
      stack: [".NET Core", "SQL Server", "Bootstrap", "JavaScript"],
      color: "from-purple-500 to-pink-600",
    },
    {
      type: "work",
      title: "Full Stack Developer - Final Year Internship",
      company: "AGIRH, Casablanca",
      logo: "/projects/agirh.jfif",
      period: "March 2023",
      duration: "1 month",
      description: "Developed an MVC web platform for course and enrollment management with course tracking, user management, and a modern responsive interface.",
      stack: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      color: "from-indigo-500 to-blue-600",
    },
  ];

  const education = [
    {
      type: "education",
      title: "Software Engineering Degree",
      subtitle: "Computer Science & Networks",
      institution: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
      logo: "/projects/emsi.png",
      period: "2023 - Present",
      description: "Advanced engineering education with specialization in Full Stack Development and DevOps practices.",
      color: "from-green-500 to-emerald-600",
    },
    {
      type: "education",
      title: "Specialized Technician Diploma",
      subtitle: "Computer Development",
      institution: "Institut Spécialisé de Technologie Appliquée, ISTA",
      logo: null,
      period: "2021 - 2023",
      description: "Technical training in web and mobile application development with hands-on experience.",
      color: "from-teal-500 to-cyan-600",
    },
    {
      type: "education",
      title: "Baccalaureate Degree",
      subtitle: "Physical Sciences & Chemistry",
      institution: "Groupe Scolaire Les Princes",
      logo: null,
      period: "2019 - 2020",
      description: "Scientific foundation with academic excellence in mathematics and physics.",
      color: "from-sky-500 to-blue-600",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen py-24 relative overflow-hidden bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent font-poppins"
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
            Experience & Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0 }}
            className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            My professional journey and academic background
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto">
          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600">
                <HiBriefcase className="text-white text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-poppins">
                Professional Experience
              </h3>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-3 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0 }}
                    className="relative pl-10 sm:pl-16 lg:pl-24 group"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className={`absolute left-1.5 sm:left-6 top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r ${exp.color} border-2 sm:border-4 border-[#050510]`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Content card */}
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="glass p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                            {exp.title}
                          </h4>
                          <div className="flex items-center gap-3 text-blue-400 mb-2">
                            {exp.logo && (
                              <div className="w-12 h-12 rounded-lg bg-white/10 p-1.5 flex items-center justify-center overflow-hidden">
                                <Image
                                  src={exp.logo}
                                  alt={exp.company}
                                  width={48}
                                  height={48}
                                  className="object-contain"
                                />
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <HiLocationMarker className="text-lg" />
                              <span className="font-semibold">{exp.company}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-gray-400 mb-1">
                            <HiCalendar className="text-lg" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0 + i * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 text-blue-300 text-sm font-medium hover:border-blue-500/50 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600">
                <HiAcademicCap className="text-white text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-4xl font-bold text-white font-poppins">
                Education
              </h3>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-emerald-500 to-transparent" />

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0 }}
                    className="relative pl-24 group"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className={`absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r ${edu.color} border-4 border-[#050510]`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Content card */}
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-white mb-1">
                            {edu.title}
                          </h4>
                          <p className="text-lg text-green-400 font-semibold mb-2">
                            {edu.subtitle}
                          </p>
                          <div className="flex items-center gap-3 text-gray-400">
                            {edu.logo && (
                              <div className="w-12 h-12 rounded-lg bg-white/10 p-1.5 flex items-center justify-center overflow-hidden">
                                <Image
                                  src={edu.logo}
                                  alt={edu.institution}
                                  width={48}
                                  height={48}
                                  className="object-contain"
                                />
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <HiLocationMarker className="text-lg" />
                              <span className="text-sm">{edu.institution}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <HiCalendar className="text-lg" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

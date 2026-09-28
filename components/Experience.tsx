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
      title: "Consultant Technique SAP Hybris",
      company: "INETUM BUSINESS SOLUTIONS, Casablanca, Maroc",
      logo: null,
      period: "Février 2026 – Août 2026",
      duration: "7 mois",
      description: "Contribution à 2 projets d’entreprise pour Poste Maroc et Poste Tunisienne, couvrant le développement backend, l’évolution applicative et l’intégration SI. Participation au traitement de 20+ anomalies et évolutions pour améliorer la stabilité et réduire les retours fonctionnels d’environ 20 %.",
      stack: ["Java 17", "SAP Commerce Cloud", "SAP Hybris", "REST APIs", "Spring Boot", "Agile/Scrum"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      type: "work",
      title: "Développeur Full Stack",
      company: "CASA BAIA, Casablanca, Maroc",
      logo: null,
      period: "Juillet 2025 – Août 2025",
      duration: "2 mois",
      description: "Développement d’une plateforme Angular/Spring Boot couvrant 2 profils utilisateurs et 8+ fonctionnalités métier, centralisant le suivi des plaintes et réduisant d’environ 30 % le temps du suivi manuel grâce aux workflows digitalisés et aux analytics temps réel.",
      stack: ["Angular", "Spring Boot", "REST APIs", "TypeScript", "SQL"],
      color: "from-purple-500 to-pink-600",
    },
    {
      type: "work",
      title: "Développeur Full Stack",
      company: "PLUTUS, Mohammedia, Maroc",
      logo: null,
      period: "Juillet 2024 – Septembre 2024",
      duration: "2 mois",
      description: "Développement d’une application MVC couvrant 2 processus métier : stocks et commandes, avec 8+ fonctionnalités, centralisant les données sous SQL Server et améliorant d’environ 20 % la rapidité de suivi des opérations.",
      stack: [".NET Core", "ASP.NET MVC", "SQL Server", "JavaScript"],
      color: "from-indigo-500 to-blue-600",
    },
    {
      type: "work",
      title: "Développeur Full Stack",
      company: "AGIRH, Casablanca, Maroc",
      logo: null,
      period: "Mars 2023 - Avril 2023",
      duration: "1 mois",
      description: "Développement d’une plateforme MVC couvrant 3 processus clés : cours, inscriptions et utilisateurs avec 10+ fonctionnalités, centralisant les opérations et réduisant d’environ 25 % les tâches administratives manuelles.",
      stack: ["MVC", "MySQL", "Bootstrap", "JavaScript"],
      color: "from-teal-500 to-cyan-600",
    },
  ];

  const education = [
    {
      type: "education",
      title: "Diplôme d’Ingénieur d’État en Génie Informatique",
      subtitle: "EMSI Casablanca",
      institution: "EMSI Casablanca",
      logo: null,
      period: "2023 - 2026",
      description: "Formation d’ingénieur orientée systèmes d’information, développement logiciel, intégration et architecture applicative.",
      color: "from-green-500 to-emerald-600",
    },
    {
      type: "education",
      title: "Diplôme de Technicien Spécialisé en Développement Informatique",
      subtitle: "ISTA Mohammedia",
      institution: "ISTA, Mohammedia",
      logo: null,
      period: "2021 - 2023",
      description: "Formation technique spécialisée en développement informatique et applications web avec mise en pratique sur projets réels.",
      color: "from-teal-500 to-cyan-600",
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

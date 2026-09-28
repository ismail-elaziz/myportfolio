"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap } from "react-icons/hi";
import Image from "next/image";

const certifications = [
  {
    title: "SAP Commerce Cloud Bootcamp 2026",
    issuer: "Udemy",
    date: "2026",
    category: "SAP",
    color: "from-blue-500 to-cyan-500",
    link: "https://www.udemy.com",
    image: null,
  },
  {
    title: "Introduction to Java and Object-Oriented Programming",
    issuer: "Oracle / Coursera",
    date: "2025",
    category: "Backend",
    color: "from-orange-500 to-red-500",
    link: "https://www.coursera.org",
    image: null,
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    issuer: "Oracle",
    date: "2025",
    category: "DevOps",
    color: "from-purple-500 to-indigo-500",
    link: "https://www.oracle.com/cloud/",
    image: null,
  },
  {
    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    issuer: "IBM / Coursera",
    date: "2025",
    category: "DevOps",
    color: "from-violet-500 to-indigo-500",
    link: "https://www.coursera.org",
    image: null,
  },
  {
    title: "Continuous Integration and Continuous Delivery (CI/CD)",
    issuer: "IBM / Coursera",
    date: "2025",
    category: "DevOps",
    color: "from-emerald-500 to-teal-500",
    link: "https://www.coursera.org",
    image: null,
  },
  {
    title: "React Basic",
    issuer: "Meta / Coursera",
    date: "2025",
    category: "Frontend",
    color: "from-cyan-500 to-blue-500",
    link: "https://www.coursera.org",
    image: null,
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="certifications"
      className="py-20 relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text font-poppins">
            Certifications
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Professional achievements and credentials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative block overflow-hidden rounded-xl"
            >
              {/* Certificate Screenshot */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl bg-slate-900">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={640}
                    height={360}
                    className="w-full h-full object-contain bg-white"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-8 text-center">
                    <div className="space-y-2">
                      <div className={`inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r ${cert.color} text-white text-xs font-bold shadow-lg`}>
                        {cert.category}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {/* Category Badge */}
                    <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${cert.color} text-white text-xs font-bold mb-3 shadow-lg`}>
                      {cert.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                      {cert.title}
                    </h3>

                    {/* Issuer & Date */}
                    <p className="text-gray-300 text-sm mb-4">
                      {cert.issuer} • {cert.date}
                    </p>

                    {/* View Button */}
                    <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r ${cert.color} text-white text-sm font-semibold shadow-lg`}>
                      <HiAcademicCap size={20} />
                      <span>View Certificate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-xl -z-10 bg-gradient-to-r ${cert.color}`} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

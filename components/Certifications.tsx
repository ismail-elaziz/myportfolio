"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiDocumentText, HiExternalLink } from "react-icons/hi";

const certifications = [
  {
    title: "SAP Professional Fundamentals",
    issuer: "SAP",
    date: "2024",
    category: "SAP",
    color: "from-blue-500 to-cyan-500",
    pdf: "/certif/SAP Professional Fundamentals.pdf",
  },
  {
    title: "SAP Technology Consultant Hands-on Project",
    issuer: "SAP",
    date: "2024",
    category: "SAP",
    color: "from-blue-500 to-cyan-500",
    pdf: "/certif/SAP Technology Consultant Hands-on Project.pdf",
  },
  {
    title: "Introduction to Java and Object-Oriented Programming",
    issuer: "IBM / Coursera",
    date: "2024",
    category: "Backend",
    color: "from-orange-500 to-red-500",
    pdf: "/certif/Introduction to Java and Object-Oriented Programming.pdf",
  },
  {
    title: "React Basics",
    issuer: "Meta / Coursera",
    date: "2024",
    category: "Frontend",
    color: "from-cyan-500 to-blue-500",
    pdf: "/certif/React Basics.pdf",
  },
  {
    title: "Interactivity with JavaScript",
    issuer: "Coursera",
    date: "2024",
    category: "Frontend",
    color: "from-yellow-500 to-orange-500",
    pdf: "/certif/Interactivity with JavaScript.pdf",
  },
  {
    title: "Introduction to Containers Docker, Kubernetes & OpenShift",
    issuer: "IBM / Coursera",
    date: "2024",
    category: "DevOps",
    color: "from-purple-500 to-indigo-500",
    pdf: "/certif/Introduction to Containers Docker, Kubernetes & OpenShift.pdf",
  },
  {
    title: "Introduction to DevOps",
    issuer: "IBM / Coursera",
    date: "2024",
    category: "DevOps",
    color: "from-green-500 to-emerald-500",
    pdf: "/certif/Introduction to DevOps.pdf",
  },
  {
    title: "Continuous Integration and Continuous Delivery",
    issuer: "IBM / Coursera",
    date: "2024",
    category: "DevOps",
    color: "from-pink-500 to-purple-500",
    pdf: "/certif/Continuous Integration and Continuous Delivery.pdf",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative glass p-6 rounded-xl hover:glow-box transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Category badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${cert.color} text-white`}>
                  {cert.category}
                </span>
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className={`p-2 rounded-lg bg-gradient-to-r ${cert.color} bg-opacity-20`}
                >
                  <HiDocumentText className="text-white" size={20} />
                </motion.div>
              </div>

              {/* Icon */}
              <div className="mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-lg`}>
                  <HiAcademicCap size={28} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-1 font-medium">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.date}</p>
              </div>

              {/* View PDF link */}
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Certificate</span>
                <HiExternalLink size={16} />
              </div>

              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 bg-gradient-to-r ${cert.color}`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

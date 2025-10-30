"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap } from "react-icons/hi";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Certificate Card */}
              <div className="relative aspect-[8.5/11] rounded-xl overflow-hidden glass border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300 shadow-2xl">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                {/* Paper Lines Effect */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(15)].map((_, i) => (
                    <div key={i} className="h-[1px] bg-white/30 mb-6 mt-6" />
                  ))}
                </div>

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col items-center justify-center text-center">
                  {/* Category Badge */}
                  <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${cert.color} text-white text-xs font-bold mb-6 shadow-lg`}>
                    {cert.category}
                  </div>

                  {/* Certificate Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform`}>
                    <HiAcademicCap size={40} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg mb-3 px-2 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-gray-300 text-sm font-medium mb-2">
                    {cert.issuer}
                  </p>

                  {/* Date */}
                  <p className="text-gray-400 text-xs mb-6">
                    {cert.date}
                  </p>

                  {/* View Button */}
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-block px-6 py-2.5 rounded-lg bg-gradient-to-r ${cert.color} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105`}
                  >
                    View Certificate →
                  </a>
                </div>

                {/* Corner Fold Effect */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-r-[60px] border-t-white/10 border-r-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

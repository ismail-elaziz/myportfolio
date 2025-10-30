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
            <motion.a
              key={cert.title}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative block"
            >
              {/* PDF Preview Container */}
              <div className="relative aspect-[8.5/11] rounded-lg overflow-hidden bg-white shadow-xl">
                {/* PDF Embed/Preview */}
                <iframe
                  src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full pointer-events-none"
                  title={cert.title}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${cert.color} text-white mb-2`}>
                      {cert.category}
                    </span>
                    <h3 className="text-white font-bold text-sm mb-1">{cert.title}</h3>
                    <p className="text-gray-300 text-xs">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

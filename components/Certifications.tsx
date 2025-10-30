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
    link: "https://coursera.org/share/54f231efdf90169328c16bddcc73e043",
    image: "/certif/screen/SAP Professional Fundamentals.png",
  },
  {
    title: "SAP Technology Consultant Hands-on Project",
    issuer: "SAP",
    date: "2024",
    category: "SAP",
    color: "from-blue-500 to-cyan-500",
    link: "https://coursera.org/share/beeb06c2e25d8dbfa678cc903de37cf0",
    image: "/certif/screen/SAP Technology Consultant Hands-on Project.png",
  },
  {
    title: "Introduction to Java and Object-Oriented Programming",
    issuer: "IBM / Coursera",
    date: "2024",
    category: "Backend",
    color: "from-orange-500 to-red-500",
    link: "https://coursera.org/share/3cd2bb933747b4c12f4ff1f95d82b61f",
    image: "/certif/screen/Introduction to Java and Object-Oriented.png",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan / Coursera",
    date: "2024",
    category: "Backend",
    color: "from-yellow-500 to-orange-500",
    link: "https://coursera.org/share/11aef0855a5ed7103a9a57fe52d4ba69",
    image: "/certif/screen/Programming for Everybody (Getting Started with.png",
  },
  {
    title: "React Basics",
    issuer: "Meta / Coursera",
    date: "2024",
    category: "Frontend",
    color: "from-cyan-500 to-blue-500",
    link: "https://coursera.org/share/93a4fa083e7f5889f6319220bfb1b72d",
    image: "/certif/screen/React Basics.png",
  },
  {
    title: "Interactivity with JavaScript",
    issuer: "University of Michigan / Coursera",
    date: "2024",
    category: "Frontend",
    color: "from-yellow-400 to-amber-500",
    link: "https://coursera.org/share/be9fa8576843cff587028a27b14d5171",
    image: "/certif/screen/Interactivity with JavaScript.png",
  },
  {
    title: "Solving Problems with Creative and Critical Thinking",
    issuer: "University of Michigan / Coursera",
    date: "2024",
    category: "Soft Skills",
    color: "from-purple-400 to-pink-500",
    link: "https://coursera.org/share/57b37d5b44f184f5a2c36b67958cca50",
    image: "/certif/screen/Solving Problems with Creative and Critical.png",
  },
  {
    title: "Introduction to Containers Docker, Kubernetes & OpenShift",
    issuer: "IBM / Coursera",
    date: "2024",
    category: "DevOps",
    color: "from-purple-500 to-indigo-500",
    link: "https://coursera.org/share/1d0bf475b6e9a26086e366042e7c3f8e",
    image: "/certif/screen/Introduction to Containers Docker, Kubernetes.png",
  },
  {
    title: "Introduction to DevOps",
    issuer: "IBM / Coursera",
    date: "2024",
    category: "DevOps",
    color: "from-green-500 to-emerald-500",
    link: "https://coursera.org/share/82b0e2d18fe2e37e4b4620ebc6ba359c",
    image: "/certif/screen/Introduction to DevOps.png",
  },
  {
    title: "Continuous Integration and Continuous Delivery",
    issuer: "IBM / Coursera",
    date: "2024",
    category: "DevOps",
    color: "from-pink-500 to-purple-500",
    link: "https://coursera.org/share/91b6076e911c2199cbe4dd8f5db4f835",
    image: "/certif/screen/Continuous Integration and Continuous Delivery.png",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="relative aspect-[8.5/11] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                
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

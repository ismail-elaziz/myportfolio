"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiAcademicCap, HiDocumentText, HiExternalLink, HiEye, HiDownload } from "react-icons/hi";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={
                isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: -15 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative perspective-1000"
            >
              {/* PDF Certificate Card */}
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* PDF Preview Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-90`}>
                  {/* Paper texture effect */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
                </div>

                {/* Certificate Content */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  {/* Top Section */}
                  <div>
                    {/* Category Badge */}
                    <motion.div
                      animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                      className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-bold mb-6"
                    >
                      {cert.category}
                    </motion.div>

                    {/* Certificate Icon */}
                    <motion.div
                      animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30 shadow-xl"
                    >
                      <HiAcademicCap size={40} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Middle Section - Title */}
                  <div className="flex-1 flex items-center justify-center">
                    <h3 className="text-lg font-bold text-center leading-tight px-2">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="text-sm font-semibold opacity-90">{cert.issuer}</p>
                      <p className="text-xs opacity-70 mt-1">{cert.date}</p>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      className="flex gap-2"
                    >
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/25 hover:bg-white/35 backdrop-blur-sm rounded-xl border border-white/30 transition-all text-sm font-semibold"
                      >
                        <HiEye size={18} />
                        <span>View</span>
                      </a>
                      <a
                        href={cert.pdf}
                        download
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-white/90 text-gray-900 rounded-xl transition-all text-sm font-semibold shadow-lg"
                      >
                        <HiDownload size={18} />
                        <span>PDF</span>
                      </a>
                    </motion.div>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-r-[60px] border-t-white/20 border-r-transparent" />
                  <HiDocumentText className="absolute top-2 right-2 text-white/60" size={24} />
                </div>

                {/* Stamp Effect */}
                <motion.div
                  animate={hoveredIndex === index ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  className="absolute bottom-20 right-6 w-20 h-20 rounded-full border-4 border-white/40 flex items-center justify-center"
                >
                  <div className="text-center">
                    <HiAcademicCap size={24} className="mx-auto mb-1" />
                    <p className="text-[8px] font-bold">VERIFIED</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Shadow Effect */}
              <motion.div
                animate={hoveredIndex === index ? { opacity: 0.6, scale: 1.05 } : { opacity: 0.3, scale: 1 }}
                className={`absolute -inset-2 rounded-2xl blur-2xl -z-10 bg-gradient-to-r ${cert.color}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

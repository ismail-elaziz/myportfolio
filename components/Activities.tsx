"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const activities = [
  {
    title: "Volunteer Staff - Enactus Morocco",
    organization: "Enactus Morocco",
    description:
      "Contributed to social entrepreneurship initiatives and community development projects, working with diverse teams to create sustainable impact and empower local communities.",
    images: ["/projects/enactus.jfif", "/projects/enactus-2.jfif"],
    logo: "/projects/enactus-logo.png",
    brandColor: "#FFC72C", // Enactus official yellow
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Organization Committee Member - 9th Job Fair",
    organization: "EMSI Casablanca",
    description:
      "Played a key role in organizing the 9th Job Fair at EMSI Casablanca, coordinating logistics, managing partner communications, and facilitating connections between students and employers.",
    images: ["/projects/job-fair.jfif"],
    logo: "/projects/emsi-logo.webp",
    brandColor: "#00A651", // EMSI green
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "MC Growth Hacker & Graphic Designer",
    organization: "AIESEC Morocco",
    description:
      "Led growth hacking strategies and created compelling visual designs for AIESEC Morocco's marketing campaigns, driving engagement and expanding the organization's reach.",
    images: ["/projects/aiesec-1.jfif", "/projects/aiesec-2.jfif", "/projects/aiesec-3.jfif", "/projects/aiesec-4.jfif"],
    logo: "/projects/aiesec-morocco.png",
    brandColor: "#037EF3", // AIESEC blue
    color: "from-purple-500 to-pink-500",
  },
];

export default function Activities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  return (
    <section
      ref={ref}
      id="activities"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-[#050510] to-[#0a0a1a]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text font-poppins">
            Extracurricular Activities
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Leadership, volunteering, and community engagement
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {activities.map((activity, index) => {
            const activeImageIndex = currentImageIndex[index] || 0;
            
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  // Start image slider on hover
                  const interval = setInterval(() => {
                    setCurrentImageIndex(prev => ({
                      ...prev,
                      [index]: ((prev[index] || 0) + 1) % activity.images.length
                    }));
                  }, 1500);
                  // Store interval ID
                  (window as any)[`interval_${index}`] = interval;
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  // Clear interval
                  clearInterval((window as any)[`interval_${index}`]);
                  // Reset to first image
                  setCurrentImageIndex(prev => ({
                    ...prev,
                    [index]: 0
                  }));
                }}
              >
                {/* Card */}
                <div className="relative h-full glass rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  {/* Image Slider */}
                  <div className="relative h-48 sm:h-60 lg:h-72 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${index}-${activeImageIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={activity.images[activeImageIndex]}
                          alt={`${activity.title} - Image ${activeImageIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent" />
                    
                    {/* Image indicators */}
                    {activity.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {activity.images.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              imgIndex === activeImageIndex
                                ? 'w-6 bg-white'
                                : 'w-1.5 bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                    
                    {/* Logo Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10 p-2`}
                      style={{ backgroundColor: activity.brandColor }}
                    >
                      <Image
                        src={activity.logo}
                        alt={`${activity.organization} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </motion.div>
                  </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
                  {/* Organization Badge */}
                  <div 
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg"
                    style={{ backgroundColor: activity.brandColor }}
                  >
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {activity.organization}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                {/* Hover gradient glow */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${activity.color.split(' ')[1]}, ${activity.color.split(' ')[3]})`,
                  }}
                />
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

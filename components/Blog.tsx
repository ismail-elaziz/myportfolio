"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiCalendar, HiArrowRight } from "react-icons/hi";

const blogPosts = [
  {
    title: "Building Scalable Web Applications with Next.js 14",
    date: "October 5, 2025",
    excerpt:
      "Learn how to build high-performance web applications using Next.js 14 and the new App Router.",
    link: "#",
  },
  {
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    date: "September 22, 2025",
    excerpt:
      "Dive deep into advanced TypeScript patterns that will make your code more robust and maintainable.",
    link: "#",
  },
  {
    title: "The Future of Web Development: AI Integration",
    date: "September 10, 2025",
    excerpt:
      "Exploring how AI is transforming the way we build and interact with web applications.",
    link: "#",
  },
  {
    title: "Optimizing React Performance in Large Applications",
    date: "August 28, 2025",
    excerpt:
      "Practical tips and techniques for improving performance in large-scale React applications.",
    link: "#",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text font-poppins">
            Blog
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Thoughts on technology and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl hover:glow-box transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <HiCalendar size={16} />
                <span>{post.date}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                {post.title}
              </h3>

              <p className="text-gray-400 mb-4">{post.excerpt}</p>

              <a
                href={post.link}
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors group"
              >
                <span>Read More</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiArrowRight size={20} />
                </motion.div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

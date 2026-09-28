"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiGlobeAlt,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
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
            Contact
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Reach out for collaborations or enquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <HiMail size={20} className="sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:elazizcontact@gmail.com"
                      className="text-sm sm:text-base text-white hover:text-primary transition-colors"
                    >
                      elazizcontact@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <HiPhone size={20} className="sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a
                      href="tel:+212608204322"
                      className="text-sm sm:text-base text-white hover:text-primary transition-colors"
                    >
                      +212 6 08-20 43 22
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <HiGlobeAlt size={20} className="sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Website</p>
                    <a
                      href="https://elaziz.tech"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm sm:text-base text-white hover:text-primary transition-colors"
                    >
                      elaziz.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <HiLocationMarker size={20} className="sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-sm sm:text-base text-white">Morocco</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="https://github.com/ismail-elaziz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:glow-box transition-all"
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="https://www.linkedin.com/in/ismailelaziz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:glow-box transition-all"
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Static contact message (form removed) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="glass p-8 rounded-xl flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-3 text-white">Let&apos;s collaborate</h3>
            <p className="text-gray-300 mb-4">I&apos;m currently available for full-time, consulting, and freelance opportunities. Feel free to contact me for collaboration, product development, or technical consulting.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a href="mailto:elazizcontact@gmail.com" className="px-5 py-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition">Email me</a>
              <a href="https://www.linkedin.com/in/ismailelaziz/" target="_blank" rel="noreferrer" className="px-5 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white">LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

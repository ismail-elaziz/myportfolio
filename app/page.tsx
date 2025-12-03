"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";

// Lazy load heavy components
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));
const Activities = lazy(() => import("@/components/Activities"));
const Certifications = lazy(() => import("@/components/Certifications"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded after preloader finishes (500ms total - much faster)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader />
      <AnimatePresence>
        {isLoaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative min-h-screen"
          >
            <Navbar />
            <Hero />
            <Suspense fallback={<div className="min-h-screen" />}>
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Activities />
              <Certifications />
              <Contact />
              <Footer />
            </Suspense>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import { 
  SkeletonAbout, 
  SkeletonCard, 
  SkeletonProject, 
  SkeletonCertification, 
  SkeletonActivity 
} from "@/components/SkeletonLoader";

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
            <Suspense fallback={
              <div className="min-h-screen bg-black py-20 px-4">
                <div className="max-w-7xl mx-auto">
                  <SkeletonAbout />
                </div>
              </div>
            }>
              <About />
            </Suspense>
            <Suspense fallback={
              <div className="min-h-screen bg-black py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </div>
              </div>
            }>
              <Skills />
            </Suspense>
            <Suspense fallback={
              <div className="min-h-screen bg-black py-20 px-4">
                <div className="max-w-7xl mx-auto space-y-6">
                  <SkeletonCard />
                  <SkeletonCard />
                </div>
              </div>
            }>
              <Experience />
            </Suspense>
            <Suspense fallback={
              <div className="min-h-screen bg-black py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <SkeletonProject />
                  <SkeletonProject />
                  <SkeletonProject />
                </div>
              </div>
            }>
              <Projects />
            </Suspense>
            <Suspense fallback={
              <div className="min-h-screen bg-black py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <SkeletonActivity />
                  <SkeletonActivity />
                  <SkeletonActivity />
                </div>
              </div>
            }>
              <Activities />
            </Suspense>
            <Suspense fallback={
              <div className="min-h-screen bg-black py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  <SkeletonCertification />
                  <SkeletonCertification />
                  <SkeletonCertification />
                  <SkeletonCertification />
                </div>
              </div>
            }>
              <Certifications />
            </Suspense>
            <Suspense fallback={
              <div className="min-h-screen bg-black py-20 px-4">
                <div className="max-w-7xl mx-auto">
                  <SkeletonCard />
                </div>
              </div>
            }>
              <Contact />
            </Suspense>
            <Suspense fallback={<div className="py-10" />}>
              <Footer />
            </Suspense>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

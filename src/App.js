import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./styles/global/App.css";
import useGSAP from "./hooks/useGSAP";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Header,
  Footer,
  ScrollProgressIndicator,
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ContactSection,
} from "./components";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // GSAP smooth scroll setup
  useGSAP(() => {
    // Refresh ScrollTrigger when the page loads
    ScrollTrigger.refresh();

    // Add smooth scrolling behavior
    gsap.config({
      force3D: true,
      nullTargetWarn: false
    });

    // Optional: Add page load animation
    if (appRef.current) {
      gsap.set(appRef.current, { opacity: 0 });
      gsap.to(appRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2
      });
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <div ref={appRef} style={{
      overflow: 'hidden',
      overflowX: 'hidden',
      maxWidth: '100vw',
      width: '100%',
      position: 'relative'
    }}>
      <ScrollProgressIndicator />
      <motion.div className="cursor" variants={variants} animate="default" />
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

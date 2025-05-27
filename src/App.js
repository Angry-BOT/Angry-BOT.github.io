import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./styles/global/App.css";

import {
  Header,
  Footer,
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ContactSection,
} from "./components";

function App() {
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

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <div>
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

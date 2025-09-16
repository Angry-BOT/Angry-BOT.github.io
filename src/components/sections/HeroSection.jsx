import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import heroStyles from "../../styles/components/HeroSection.module.scss";
import useGSAP from "../../hooks/useGSAP";
import { floatingParticles, morphingBackground } from "../../utils/gsapAnimations";

function handleImageClick(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

const HeroSection = () => {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

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

  // GSAP animations
  useGSAP(() => {
    if (!sectionRef.current) return;

    // Create floating particles background
    floatingParticles(sectionRef.current, { count: 30, speed: 0.3 });

    // Morphing background animation
    if (backgroundRef.current) {
      morphingBackground(backgroundRef.current, { 
        duration: 8, 
        colors: ['#667eea', '#764ba2', '#f093fb', '#6a82fb', '#4facfe'] 
      });
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <section className={heroStyles.section2} ref={sectionRef}>
      {/* Morphing background */}
      <div 
        ref={backgroundRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          opacity: 0.05,
          zIndex: -1,
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          overflow: 'hidden'
        }}
      />
      
      <div className={heroStyles.flex_row}>
        <div className={heroStyles.flex_col}>
          <div className={heroStyles.flex_col1}>
            <motion.h1
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className={heroStyles.hero_title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm Shailesh Das👋
            </motion.h1>
            <motion.div
              className="cursor"
              variants={variants}
              animate={cursorVariant}
            />
            <motion.h5 
              className={heroStyles.highlight2}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A software engineer with 4+ years of experience designing,
              developing, and maintaining software systems and applications.
              Experience with software development methodologies such as Agile
              and Scrum along with software deployment and maintenance.
            </motion.h5>
          </div>

          <motion.div 
            className={heroStyles.flex_row1}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img
              className={heroStyles.image}
              src={"/assets/1b9b84ef77a32d5c637b1b83d4527ca8.svg"}
              alt="Location icon"
            />
            <h5 className={heroStyles.highlight21}>Hyderabad, India</h5>
          </motion.div>

          <motion.div 
            className={heroStyles.flex_row2}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <img
              className={heroStyles.image4}
              src={"/assets/806521f781ebe859ba9560e35f3a73ce.svg"}
              alt="Status icon"
            />
            <h5 className={heroStyles.highlight21}>
              Available for new projects
            </h5>
          </motion.div>

          <motion.div 
            className={heroStyles.flex_row3}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.img
              className={heroStyles.image}
              src={"/assets/f28ac2030f6d94e9fe93f6d04a22f3a4.svg"}
              alt="GitHub icon"
              onClick={() => handleImageClick("https://github.com/Angry-BOT")}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            />
            <motion.img
              className={heroStyles.image}
              src={"/assets/icons8-x.svg"}
              alt="Twitter icon"
              onClick={() =>
                handleImageClick("https://twitter.com/shailesh__das")
              }
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
        </div>

        <motion.img
          whileHover={{ scale: 1.1 }}
          className={heroStyles.image6}
          src={"/assets/hero_picture.jpeg"}
          alt="Profile picture"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </section>
  );
};

export default HeroSection; 
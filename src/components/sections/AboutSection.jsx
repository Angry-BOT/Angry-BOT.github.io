import React, { useRef, useEffect } from "react";
import aboutStyles from "../../styles/components/AboutSection.module.scss";
import useGSAP from "../../hooks/useGSAP";
import { fadeInStagger, textReveal, slideInFromSides } from "../../utils/gsapAnimations";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionsRef = useRef([]);
  const factsRef = useRef([]);

  // Add refs to arrays
  const addToDescriptions = (el) => {
    if (el && !descriptionsRef.current.includes(el)) {
      descriptionsRef.current.push(el);
    }
  };

  const addToFacts = (el) => {
    if (el && !factsRef.current.includes(el)) {
      factsRef.current.push(el);
    }
  };

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Animate badge
    if (badgeRef.current) {
      fadeInStagger([badgeRef.current], { 
        duration: 0.6, 
        y: 30, 
        delay: 0.2 
      });
    }

    // Animate title with text reveal effect
    if (titleRef.current) {
      textReveal(titleRef.current, { 
        duration: 1.2, 
        delay: 0.3 
      });
    }

    // Animate description paragraphs
    if (descriptionsRef.current.length > 0) {
      fadeInStagger(descriptionsRef.current, {
        duration: 0.8,
        stagger: 0.2,
        y: 40,
        delay: 0.6
      });
    }

    // Animate facts with slide in from sides
    if (factsRef.current.length > 0) {
      const leftFacts = factsRef.current.filter((_, index) => index % 2 === 0);
      const rightFacts = factsRef.current.filter((_, index) => index % 2 === 1);
      
      slideInFromSides(leftFacts, rightFacts, {
        duration: 0.8,
        stagger: 0.1,
        distance: 60
      });
    }
  }, []);

  return (
    <section className={aboutStyles.aboutSection} ref={sectionRef}>
      <div className={aboutStyles.container} id="about">
        <div className={aboutStyles.badge} ref={badgeRef}>About Me</div>
        
        <div className={aboutStyles.content}>
          <div className={aboutStyles.textContent}>
            <h2 className={aboutStyles.title} ref={titleRef}>
              Full Stack Developer & Problem Solver
            </h2>
            
            <p className={aboutStyles.description} ref={addToDescriptions}>
              I'm a passionate full stack developer specializing in React.js, Java, and Typescript. 
              I focus on creating seamless user experiences with clean, performant code 
              and pixel-perfect design.
            </p>
            
            <p className={aboutStyles.description} ref={addToDescriptions}>
              Since 2020, I've been building modern web applications using React.js, 
              Java, Spring Boot, Typescript, Docker, and Tailwind CSS. I enjoy working on products from 
              ideation to deployment.
            </p>
            
            <p className={aboutStyles.description} ref={addToDescriptions}>
              Connect with me on{" "}
              <a
                href="https://twitter.com/shailesh__das"
                target="_blank"
                rel="noopener noreferrer"
                className={aboutStyles.link}
              >
                Twitter
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/Angry-BOT"
                target="_blank"
                rel="noopener noreferrer"
                className={aboutStyles.link}
              >
                GitHub
              </a>
              .
            </p>
            
            <div className={aboutStyles.quickFacts}>
              <div className={aboutStyles.factColumn}>
                <div className={aboutStyles.fact} ref={addToFacts}>🎓 B.Tech Computer Engineering</div>
                <div className={aboutStyles.fact} ref={addToFacts}>💻 Full Stack Developer</div>
              </div>
              <div className={aboutStyles.factColumn}>
                <div className={aboutStyles.fact} ref={addToFacts}>📚 Continuous Learner</div>
                <div className={aboutStyles.fact} ref={addToFacts}>🚀 Available for Freelance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
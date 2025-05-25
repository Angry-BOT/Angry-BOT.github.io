import React from "react";
import aboutStyles from "../../styles/components/AboutSection.module.scss";

const AboutSection = () => {
  return (
    <section className={aboutStyles.aboutSection}>
      <div className={aboutStyles.container} id="about">
        <div className={aboutStyles.badge}>About Me</div>
        
        <div className={aboutStyles.content}>
          <div className={aboutStyles.textContent}>
            <h2 className={aboutStyles.title}>
              Full Stack Developer & Problem Solver
            </h2>
            
            <p className={aboutStyles.description}>
              I'm a passionate full stack developer specializing in React.js, Java, and Typescript. 
              I focus on creating seamless user experiences with clean, performant code 
              and pixel-perfect design.
            </p>
            
            <p className={aboutStyles.description}>
              Since 2020, I've been building modern web applications using React.js, 
              Java, Spring Boot, Typescript, Docker, and Tailwind CSS. I enjoy working on products from 
              ideation to deployment.
            </p>
            
            <p className={aboutStyles.description}>
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
                <div className={aboutStyles.fact}>🎓 B.Tech Computer Engineering</div>
                <div className={aboutStyles.fact}>💻 Full Stack Developer</div>
              </div>
              <div className={aboutStyles.factColumn}>
                <div className={aboutStyles.fact}>📚 Continuous Learner</div>
                <div className={aboutStyles.fact}>🚀 Available for Freelance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
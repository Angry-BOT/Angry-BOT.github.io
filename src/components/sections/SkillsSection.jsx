import React, { useRef, useEffect } from "react";
import skillsStyles from "../../styles/components/SkillsSection.module.scss";
import useGSAP from "../../hooks/useGSAP";
import { fadeInStagger, scaleRotateReveal, magneticHover, floatingParticles } from "../../utils/gsapAnimations";

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const skillCardsRef = useRef([]);

  const skills = [
    {
      name: "JavaScript",
      icon: "/assets/b19e878c1784478c006f14a857f1ce0b.svg",
      alt: "JavaScript icon"
    },
    {
      name: "React",
      icon: "/assets/c4ddb5c1841012e176373092695065ae.svg",
      alt: "React icon"
    },
    {
      name: "Java",
      icon: "/assets/33be7db500a0aa13ceda6d9cc997f925.svg",
      alt: "Java icon"
    },
    {
      name: "Node.js",
      icon: "/assets/6062d4f1cc411780d7ae13252979c6b1.svg",
      alt: "Node.js icon"
    },
    {
      name: "Express.js",
      icon: "/assets/9a8789ae95a4a94d9d6d829c46d112f0.svg",
      alt: "Express.js icon"
    },
    {
      name: "Spring Boot",
      icon: "/assets/spring_logo.png",
      alt: "Spring Boot logo"
    },
    {
      name: "Tailwind CSS",
      icon: "/assets/7446d1274ef810c6fd0249dfa87326e4.svg",
      alt: "Tailwind CSS icon"
    },
    {
      name: "MySQL",
      icon: "/assets/mysql_logo.png",
      alt: "MySQL logo"
    },
    {
      name: "Docker",
      icon: "/assets/10d36009610162a28eca956c33fcd46f.svg",
      alt: "Docker icon"
    },
    {
      name: "Git",
      icon: "/assets/f811ad394b23c69522b7d6ddf815f7b4.svg",
      alt: "Git icon"
    },
    {
      name: "Postman",
      icon: "/assets/postman_logo.png",
      alt: "Postman logo"
    },
    {
      name: "Figma",
      icon: "/assets/9966c66d8bdc9ea2bcdcd82884c346ab.svg",
      alt: "Figma icon"
    }
  ];

  // Add skill cards to ref array
  const addToSkillCards = (el) => {
    if (el && !skillCardsRef.current.includes(el)) {
      skillCardsRef.current.push(el);
    }
  };

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Create floating particles background
    floatingParticles(sectionRef.current, { count: 15, speed: 0.3 });

    // Animate header elements
    if (badgeRef.current) {
      fadeInStagger([badgeRef.current], { 
        duration: 0.6, 
        y: 30, 
        delay: 0.2 
      });
    }

    if (titleRef.current) {
      fadeInStagger([titleRef.current], { 
        duration: 0.8, 
        y: 40, 
        delay: 0.4 
      });
    }

    if (subtitleRef.current) {
      fadeInStagger([subtitleRef.current], { 
        duration: 0.8, 
        y: 30, 
        delay: 0.6 
      });
    }

    // Animate skill cards with premium effects
    if (skillCardsRef.current.length > 0) {
      scaleRotateReveal(skillCardsRef.current, {
        duration: 1,
        stagger: 0.1,
        scale: 0.7,
        rotation: 8,
        ease: "back.out(1.7)"
      });
    }
  }, []);

  // Add magnetic hover effects after component mounts
  useEffect(() => {
    const cleanupFunctions = [];
    
    skillCardsRef.current.forEach(card => {
      if (card) {
        const cleanup = magneticHover(card);
        cleanupFunctions.push(cleanup);
      }
    });

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup());
    };
  }, []);

  return (
    <section className={skillsStyles.skillsSection} id="skills" ref={sectionRef}>
      <div className={skillsStyles.container}>
        <div className={skillsStyles.header}>
          <div className={skillsStyles.badge} ref={badgeRef}>Skills</div>
          <h2 className={skillsStyles.title} ref={titleRef}>
            Technologies I work with
          </h2>
          <p className={skillsStyles.subtitle} ref={subtitleRef}>
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className={skillsStyles.skillsGrid}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={skillsStyles.skillCard}
              ref={addToSkillCards}
            >
                <img
                  src={skill.icon}
                  alt={skill.alt}
                  className={skillsStyles.skillIcon}
                />
              <span className={skillsStyles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 
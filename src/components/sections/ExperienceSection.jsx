import React, { useRef } from "react";
import experienceStyles from "../../styles/components/ExperienceSection.module.scss";
import useGSAP from "../../hooks/useGSAP";
import { fadeInStagger, parallaxScroll } from "../../utils/gsapAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const timelineRef = useRef(null);
  const experienceCardsRef = useRef([]);
  const timelineMarkersRef = useRef([]);
  const timelineLinesRef = useRef([]);

  const experiences = [
    {
      id: 1,
      company: "Meltwater Pvt. Ltd.",
      companyUrl: "https://www.meltwater.com",
      logo: "/assets/mw_logo_blue_stacked.svg",
      role: "Software Engineer - 2",
      duration: "Jan 2025 - Present",
      location: "Hyderabad, India - Hybrid",
      achievements: [
        "All in one influencer marketing software solution, with AI enabled search, payment tracker, campaigns, and many more things.",
        "Responsible for maintaining & enhancing the current product",
        "Responsible for R&D for new product features across the Meltwater suite"
      ]
    },
    {
      id: 2,
      company: "ADP Pvt. Ltd.",
      companyUrl: "https://www.adp.com",
      logo: "/assets/adp-logo.svg",
      role: "Sr. Member Technical",
      duration: "Oct 2023 - Jan 2025",
      location: "Hyderabad, India - Hybrid",
      achievements: [
        "Developing Payroll Solutions for >500M ARR Clients",
        "Building Next-Gen HCM Platform for all types of Businesses",
        "Leading technical initiatives for enterprise-scale applications"
      ]
    },
    {
      id: 3,
      company: "Highradius Pvt. Ltd.",
      companyUrl: "https://www.highradius.com",
      logo: "/assets/hrc-logo.svg",
      role: "Associate Software Engineer - 1",
      duration: "Jun 2021 - Sep 2023",
      location: "Bhubaneswar, India - Onsite",
      achievements: [
        "Designed and developed a REST API Framework using NodeJS that reduces web posting time by ~40%",
        "Developed & Deployed Backend Automation Agents for 20+ Customers to Production within deadlines",
        "Achieved KPI 93% for 2023 & KPI 94% for 2022",
        "Received Star Team Award & Highflyer of the Quarter in Q2 2021"
      ]
    },
    {
      id: 4,
      company: "Highradius Pvt. Ltd.",
      companyUrl: "https://www.highradius.com",
      logo: "/assets/hrc-logo.svg",
      role: "Software Engineer Intern",
      duration: "Jun 2020 - Jun 2021",
      location: "Bhubaneswar, India - Onsite",
      achievements: [
        "Developed scalable applications using Java, Spring, Hibernate & SQL",
        "Solved Framework Level Bugs and Enhanced Internal frameworks for code optimization",
        "Ensured coding standards, design patterns, and testing practices for production-ready code"
      ]
    }
  ];

  // Add experience cards to ref array
  const addToExperienceCards = (el) => {
    if (el && !experienceCardsRef.current.includes(el)) {
      experienceCardsRef.current.push(el);
    }
  };

  // Add timeline markers to ref array
  const addToTimelineMarkers = (el) => {
    if (el && !timelineMarkersRef.current.includes(el)) {
      timelineMarkersRef.current.push(el);
    }
  };

  // Add timeline lines to ref array
  const addToTimelineLines = (el) => {
    if (el && !timelineLinesRef.current.includes(el)) {
      timelineLinesRef.current.push(el);
    }
  };

  useGSAP(() => {
    if (!sectionRef.current) return;

    const isMobile = window.innerWidth <= 768;

    // Animate header elements with responsive settings
    if (badgeRef.current) {
      fadeInStagger([badgeRef.current], { 
        duration: 0.6, 
        y: 30, 
        delay: 0.2,
        scrollTriggerSettings: { start: "top 90%" }
      });
    }

    if (titleRef.current) {
      fadeInStagger([titleRef.current], { 
        duration: 0.8, 
        y: 40, 
        delay: 0.4,
        scrollTriggerSettings: { start: "top 90%" }
      });
    }

    if (subtitleRef.current) {
      fadeInStagger([subtitleRef.current], { 
        duration: 0.8, 
        y: 30, 
        delay: 0.6,
        scrollTriggerSettings: { start: "top 90%" }
      });
    }

    // Animate timeline lines progressively with better mobile triggers
    timelineLinesRef.current.forEach((line, index) => {
      if (line) {
        gsap.fromTo(line, 
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            duration: isMobile ? 0.6 : 1,
            ease: "power2.out",
            delay: isMobile ? 0.3 + (index * 0.1) : 0.8 + (index * 0.3),
            scrollTrigger: {
              trigger: line,
              start: isMobile ? "top 95%" : "top 90%",
              toggleActions: "play none none reverse",
              once: isMobile
            }
          }
        );
      }
    });

    // Animate timeline markers with better mobile timing
    timelineMarkersRef.current.forEach((marker, index) => {
      if (marker) {
        gsap.fromTo(marker, 
          { scale: 0, rotation: isMobile ? 0 : 45 },
          {
            scale: 1,
            rotation: 0,
            duration: isMobile ? 0.4 : 0.6,
            ease: "back.out(1.7)",
            delay: isMobile ? 0.4 + (index * 0.1) : 1 + (index * 0.2),
            scrollTrigger: {
              trigger: marker,
              start: isMobile ? "top 95%" : "top 85%",
              toggleActions: "play none none reverse",
              once: isMobile
            }
          }
        );
      }
    });

    // Animate experience cards with mobile-optimized settings
    experienceCardsRef.current.forEach((card, index) => {
      if (card) {
        const direction = isMobile ? 0 : (index % 2 === 0 ? -100 : 100);
        
        gsap.fromTo(card,
          { 
            x: direction, 
            opacity: 0,
            scale: 0.9,
            rotationY: isMobile ? 0 : (direction > 0 ? 15 : -15)
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: isMobile ? 0.6 : 1,
            ease: "power3.out",
            delay: isMobile ? 0.5 + (index * 0.1) : 1.2 + (index * 0.2),
            scrollTrigger: {
              trigger: card,
              start: isMobile ? "top 90%" : "top 80%",
              toggleActions: "play none none reverse",
              once: isMobile
            }
          }
        );

        // Add subtle parallax scrolling to cards (desktop only)
        if (!isMobile) {
          parallaxScroll(card, { speed: 0.1, direction: 'up' });
        }
      }
    });

    // Timeline container parallax (desktop only)
    if (timelineRef.current && !isMobile) {
      parallaxScroll(timelineRef.current, { speed: 0.05, direction: 'up' });
    }
  }, []);

  return (
    <section className={experienceStyles.experienceSection} id="experience" ref={sectionRef}>
      <div className={experienceStyles.container}>
        <div className={experienceStyles.header}>
          <div className={experienceStyles.badge} ref={badgeRef}>Experience</div>
          <h2 className={experienceStyles.title} ref={titleRef}>
            Professional Journey
          </h2>
          <p className={experienceStyles.subtitle} ref={subtitleRef}>
            Here's a summary of my most recent professional experiences
          </p>
        </div>

        <div className={experienceStyles.timeline} ref={timelineRef}>
          {experiences.map((experience, index) => (
            <div key={experience.id} className={experienceStyles.timelineItem}>
              <div className={experienceStyles.timelineMarker}>
                <div 
                  className={experienceStyles.markerDot}
                  ref={addToTimelineMarkers}
                ></div>
                {index < experiences.length - 1 && (
                  <div 
                    className={experienceStyles.timelineLine}
                    ref={addToTimelineLines}
                  ></div>
                )}
              </div>
              
              <div 
                className={experienceStyles.experienceCard}
                ref={addToExperienceCards}
              >
                <div className={experienceStyles.cardHeader}>
                  <div className={experienceStyles.roleInfo}>
                    <h3 className={experienceStyles.role}>{experience.role}</h3>
                    <div className={experienceStyles.companySection}>
                      {experience.logo && (
                        <div className={experienceStyles.logoWrapper}>
                          <img 
                            src={experience.logo} 
                            alt={`${experience.company} logo`}
                            className={experienceStyles.companyLogo}
                          />
                        </div>
                      )}
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={experienceStyles.companyLink}
                      >
                        {experience.company}
                      </a>
                    </div>
                    <p className={experienceStyles.location}>{experience.location}</p>
                  </div>
                  <div className={experienceStyles.duration}>
                    {experience.duration}
                  </div>
                </div>
                
                <div className={experienceStyles.achievements}>
                  {experience.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className={experienceStyles.achievement}>
                      <span className={experienceStyles.bullet}>•</span>
                      <span className={experienceStyles.achievementText}>
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 
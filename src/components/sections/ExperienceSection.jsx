import React from "react";
import experienceStyles from "../../styles/components/ExperienceSection.module.scss";

const ExperienceSection = () => {
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

  return (
    <section className={experienceStyles.experienceSection} id="experience">
      <div className={experienceStyles.container}>
        <div className={experienceStyles.header}>
          <div className={experienceStyles.badge}>Experience</div>
          <h2 className={experienceStyles.title}>
            Professional Journey
          </h2>
          <p className={experienceStyles.subtitle}>
            Here's a summary of my most recent professional experiences
          </p>
        </div>

        <div className={experienceStyles.timeline}>
          {experiences.map((experience, index) => (
            <div key={experience.id} className={experienceStyles.timelineItem}>
              <div className={experienceStyles.timelineMarker}>
                <div className={experienceStyles.markerDot}></div>
                {index < experiences.length - 1 && (
                  <div className={experienceStyles.timelineLine}></div>
                )}
              </div>
              
              <div className={experienceStyles.experienceCard}>
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
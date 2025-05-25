import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroStyles from "../../styles/components/HeroSection.module.scss";

function handleImageClick(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

const HeroSection = () => {
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
    <section className={heroStyles.section2}>
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
          src={"https://media.licdn.com/dms/image/v2/D5603AQHeL4bQ3V-blA/profile-displayphoto-shrink_800_800/B56ZZkGG1iHgAg-/0/1745436045621?e=1753920000&v=beta&t=KeIzSvgwCQ2wxVKlrTfyv3FgNFx6PMVovWGJte7sF70"}
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
import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroStyles from "./hero.module.scss";
function handleImageClick(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

const RenderHeroSection = () => {
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
            >
              Hi, I’m Shailesh Das👋
            </motion.h1>
            <motion.div
              className="cursor"
              variants={variants}
              animate={cursorVariant}
            />
            <h5 className={heroStyles.highlight2}>
              A software engineer with 4+ years of experience designing,
              developing, and maintaining software systems and applications.
              Experience with software development methodologies such as Agile
              and Scrum along with software deployment and maintenance.
            </h5>
          </div>

          <div className={heroStyles.flex_row1}>
            <img
              className={heroStyles.image}
              src={"/assets/1b9b84ef77a32d5c637b1b83d4527ca8.svg"}
              alt="alt text"
            />
            <h5 className={heroStyles.highlight21}>Hyderabad, India</h5>
          </div>

          <div className={heroStyles.flex_row2}>
            <img
              className={heroStyles.image4}
              src={"/assets/806521f781ebe859ba9560e35f3a73ce.svg"}
              alt="alt text"
            />
            <h5 className={heroStyles.highlight21}>
              Available for new projects
            </h5>
          </div>

          <div className={heroStyles.flex_row3}>
            <img
              className={heroStyles.image}
              src={"/assets/f28ac2030f6d94e9fe93f6d04a22f3a4.svg"}
              alt="alt text"
              onClick={() => handleImageClick("https://github.com/Angry-BOT")}
            />
            <img
              className={heroStyles.image}
              src={"/assets/icons8-x.svg"}
              alt="alt text"
              onClick={() =>
                handleImageClick("https://twitter.com/shailesh__das")
              }
            />
          </div>
        </div>

        <motion.img
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className={heroStyles.image6}
          src={"/assets/hero_picture.jpeg"}
          alt="alt text"
        />
      </div>
    </section>
  );
};

export default RenderHeroSection;

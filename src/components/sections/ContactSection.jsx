import React, { useState, useRef, useEffect } from "react";
import contactStyles from "../../styles/components/ContactSection.module.scss";
import useGSAP from "../../hooks/useGSAP";
import { fadeInStagger, morphingBackground, floatingParticles, magneticHover } from "../../utils/gsapAnimations";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const titleRef = useRef(null);
  const contactItemsRef = useRef([]);
  const socialIconsRef = useRef([]);
  const backgroundRef = useRef(null);

  function handleImageClick(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isNumberCopied, setIsNumberCopied] = useState(false);

  // Add contact items to ref array
  const addToContactItems = (el) => {
    if (el && !contactItemsRef.current.includes(el)) {
      contactItemsRef.current.push(el);
    }
  };

  // Add social icons to ref array
  const addToSocialIcons = (el) => {
    if (el && !socialIconsRef.current.includes(el)) {
      socialIconsRef.current.push(el);
    }
  };

  const copyImageClick = async (val) => {
    const phoneNumber = "+917001794582";
    const email = "shailo199925@gmail.com";
    try {
      if (val === "number") {
        await navigator.clipboard.writeText(phoneNumber);
        setIsNumberCopied(true);
        console.log("Phone number copied to clipboard!");
        // Automatically hide feedback after 2 seconds
        setTimeout(() => {
          setIsNumberCopied(false);
        }, 2000);
      } else {
        await navigator.clipboard.writeText(email);
        setIsEmailCopied(true);
        console.log("Email copied to clipboard!");
        // Automatically hide feedback after 2 seconds
        setTimeout(() => {
          setIsEmailCopied(false);
        }, 2000);
      }
    } catch (err) {
      console.error("Error in copying text: ", err);
    }
  };

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Create floating particles background
    floatingParticles(sectionRef.current, { count: 25, speed: 0.4 });

    // Morphing background animation
    if (backgroundRef.current) {
      morphingBackground(backgroundRef.current, { 
        duration: 6, 
        colors: ['#667eea', '#764ba2', '#f093fb', '#6a82fb'] 
      });
    }

    // Animate button
    if (buttonRef.current) {
      fadeInStagger([buttonRef.current], { 
        duration: 0.8, 
        y: 40, 
        delay: 0.2,
        ease: "back.out(1.7)"
      });
    }

    // Animate title
    if (titleRef.current) {
      fadeInStagger([titleRef.current], { 
        duration: 1, 
        y: 50, 
        delay: 0.4 
      });
    }

    // Animate contact items
    if (contactItemsRef.current.length > 0) {
      fadeInStagger(contactItemsRef.current, {
        duration: 0.8,
        stagger: 0.2,
        y: 60,
        delay: 0.6,
        ease: "power3.out"
      });
    }

    // Animate social icons
    if (socialIconsRef.current.length > 0) {
      fadeInStagger(socialIconsRef.current, {
        duration: 0.6,
        stagger: 0.1,
        y: 30,
        delay: 1.2,
        ease: "back.out(1.7)"
      });
    }
  }, []);

  // Add magnetic hover effects after component mounts
  useEffect(() => {
    const cleanupFunctions = [];
    
    // Add magnetic effect to button
    if (buttonRef.current) {
      const cleanup = magneticHover(buttonRef.current);
      cleanupFunctions.push(cleanup);
    }

    // Add magnetic effect to social icons
    socialIconsRef.current.forEach(icon => {
      if (icon) {
        const cleanup = magneticHover(icon);
        cleanupFunctions.push(cleanup);
      }
    });

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup());
    };
  }, []);

  return (
    <section className={contactStyles.section6} ref={sectionRef}>
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
          opacity: 0.1,
          zIndex: -1,
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          overflow: 'hidden'
        }}
      />
      
      <div className={contactStyles.flex_col} id="contact">
        <button className={contactStyles.btn} ref={buttonRef}>Get in touch</button>
        <h3
          className={contactStyles.subtitle}
          ref={titleRef}
        >{`What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.`}</h3>

        <div className={contactStyles.flex_row} ref={addToContactItems}>
          <img
            className={contactStyles.image29}
            src={"/assets/9022593847d314fddbefb54248ceab3b.svg"}
            alt="Email icon"
          />
          <h1 className={contactStyles.big_title}>shailo199925@gmail.com</h1>
          <img
            className={contactStyles.image29}
            src={"/assets/5824f5e9f60ddb648700c1efeb3f79ac.svg"}
            alt="Copy icon"
            onClick={() => copyImageClick("email")}
          />
        </div>
        <span
          className={`${contactStyles.copyFeedback1} ${
            isEmailCopied ? contactStyles.show : ""
          }`}
        >
          {`Copied to clipboard!`}
        </span>
        <div className={contactStyles.flex_row1} ref={addToContactItems}>
          <img
            className={contactStyles.image291}
            src={"/assets/82ef13493eada343640895e0c9e88381.svg"}
            alt="Phone icon"
          />
          <h1 className={contactStyles.big_title1}>+91 7001794582</h1>
          <img
            className={contactStyles.image291}
            src={"/assets/5824f5e9f60ddb648700c1efeb3f79ac.svg"}
            alt="Copy icon"
            onClick={() => copyImageClick("number")}
          />
        </div>
        <span
          className={`${contactStyles.copyFeedback2} ${
            isNumberCopied ? contactStyles.show : ""
          }`}
        >
          {`Copied to clipboard!`}
        </span>
        <h5 className={contactStyles.highlight2} ref={addToContactItems}>
          You may also find me on these platforms!
        </h5>

        <div className={contactStyles.flex_row2}>
          <img
            className={contactStyles.image}
            src={"/assets/f28ac2030f6d94e9fe93f6d04a22f3a4.svg"}
            alt="GitHub icon"
            onClick={() => handleImageClick("https://github.com/Angry-BOT")}
            ref={addToSocialIcons}
          />
          <img
            className={contactStyles.image}
            src={"/assets/6aebc4e3be4f56402ce7171c0b239d36.svg"}
            alt="Twitter icon"
            onClick={() =>
              handleImageClick("https://twitter.com/shailesh__das")
            }
            ref={addToSocialIcons}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 
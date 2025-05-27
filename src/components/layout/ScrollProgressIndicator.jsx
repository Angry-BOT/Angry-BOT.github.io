import React, { useRef } from "react";
import useGSAP from "../../hooks/useGSAP";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollProgressIndicator = () => {
  const progressRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!progressRef.current || !containerRef.current) return;

    // Create scroll progress animation
    gsap.to(progressRef.current, {
      scaleX: 1,
      transformOrigin: "left center",
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        invalidateOnRefresh: true
      }
    });

    // Add a subtle glow effect
    gsap.to(progressRef.current, {
      boxShadow: "0 0 20px rgba(102, 126, 234, 0.8)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  const containerStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: 'rgba(255, 255, 255, 0.1)',
    zIndex: 9999,
    backdropFilter: 'blur(10px)'
  };

  const progressStyles = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb)',
    transformOrigin: 'left center',
    scaleX: 0
  };

  return (
    <div ref={containerRef} style={containerStyles}>
      <div ref={progressRef} style={progressStyles} />
    </div>
  );
};

export default ScrollProgressIndicator; 
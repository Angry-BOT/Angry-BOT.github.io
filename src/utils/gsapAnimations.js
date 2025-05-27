import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Mobile detection utility
const isMobile = () => window.innerWidth <= 768;
const isTablet = () => window.innerWidth <= 1024 && window.innerWidth > 768;

// Get responsive scroll trigger settings
const getResponsiveScrollTrigger = (baseSettings = {}) => {
  const mobile = isMobile();
  const tablet = isTablet();
  
  const defaultSettings = {
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  };
  
  // Adjust trigger points for mobile devices
  if (mobile) {
    return {
      ...defaultSettings,
      ...baseSettings,
      start: baseSettings.start || "top 90%", // Much earlier trigger on mobile
      end: baseSettings.end || "bottom 10%",
      // Add mobile-specific settings for better performance
      once: false, // Allow re-triggering
      refreshPriority: -1 // Lower priority for better performance
    };
  } else if (tablet) {
    return {
      ...defaultSettings,
      ...baseSettings,
      start: baseSettings.start || "top 85%"
    };
  }
  
  return {
    ...defaultSettings,
    ...baseSettings
  };
};

// Premium fade-in with stagger animation
export const fadeInStagger = (elements, options = {}) => {
  const { 
    duration = 0.8, 
    stagger = 0.2, 
    y = 50, 
    delay = 0,
    ease = "power2.out",
    scrollTriggerSettings = {}
  } = options;

  // Adjust for mobile performance
  const mobile = isMobile();
  const adjustedDuration = mobile ? duration * 0.8 : duration;
  const adjustedStagger = mobile ? stagger * 0.7 : stagger;
  const adjustedY = mobile ? y * 0.7 : y;

  return gsap.fromTo(elements, 
    { 
      opacity: 0, 
      y: adjustedY,
      scale: 0.95
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: adjustedDuration,
      stagger: adjustedStagger,
      delay,
      ease,
      scrollTrigger: {
        trigger: elements[0],
        ...getResponsiveScrollTrigger(scrollTriggerSettings)
      }
    }
  );
};

// Parallax scrolling effect
export const parallaxScroll = (element, options = {}) => {
  const { speed = 0.5, direction = 'up' } = options;
  const mobile = isMobile();
  
  // Reduce parallax effect on mobile for better performance
  if (mobile) {
    return null; // Disable parallax on mobile
  }
  
  const yMovement = direction === 'up' ? -100 * speed : 100 * speed;

  return gsap.to(element, {
    yPercent: yMovement,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

// Text reveal animation (like premium websites)
export const textReveal = (element, options = {}) => {
  const { duration = 1, delay = 0 } = options;
  const mobile = isMobile();
  
  // Simplified animation for mobile
  if (mobile) {
    return gsap.fromTo(element, 
      { 
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: duration * 0.8,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          ...getResponsiveScrollTrigger()
        }
      }
    );
  }
  
  // Create a wrapper div for the reveal effect on desktop
  const wrapper = document.createElement('div');
  wrapper.style.overflow = 'hidden';
  element.parentNode.insertBefore(wrapper, element);
  wrapper.appendChild(element);

  return gsap.fromTo(element, 
    { 
      y: "100%",
      opacity: 0
    },
    {
      y: "0%",
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: wrapper,
        ...getResponsiveScrollTrigger({ start: "top 85%" })
      }
    }
  );
};

// Smooth scale and rotate animation
export const scaleRotateReveal = (elements, options = {}) => {
  const { 
    duration = 1.2, 
    stagger = 0.15,
    scale = 0.8,
    rotation = 5,
    ease = "back.out(1.7)"
  } = options;

  const mobile = isMobile();
  const adjustedDuration = mobile ? duration * 0.7 : duration;
  const adjustedStagger = mobile ? stagger * 0.8 : stagger;

  return gsap.fromTo(elements,
    {
      opacity: 0,
      scale: scale,
      rotation: mobile ? 0 : rotation, // Remove rotation on mobile
      filter: mobile ? "none" : "blur(10px)" // Remove blur on mobile
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      filter: "blur(0px)",
      duration: adjustedDuration,
      stagger: adjustedStagger,
      ease,
      scrollTrigger: {
        trigger: elements[0],
        ...getResponsiveScrollTrigger({ start: "top 75%" })
      }
    }
  );
};

// Premium slide in from sides
export const slideInFromSides = (leftElements, rightElements, options = {}) => {
  const { duration = 0.8, stagger = 0.2, distance = 100 } = options;
  const mobile = isMobile();
  const adjustedDistance = mobile ? distance * 0.6 : distance;
  const adjustedDuration = mobile ? duration * 0.8 : duration;

  const leftAnimation = gsap.fromTo(leftElements,
    { x: -adjustedDistance, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: adjustedDuration,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: leftElements[0],
        ...getResponsiveScrollTrigger()
      }
    }
  );

  const rightAnimation = gsap.fromTo(rightElements,
    { x: adjustedDistance, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: adjustedDuration,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: rightElements[0],
        ...getResponsiveScrollTrigger()
      }
    }
  );

  return [leftAnimation, rightAnimation];
};

// Counter animation
export const animateCounter = (element, options = {}) => {
  const { endValue = 100, duration = 2, suffix = "" } = options;
  
  const counter = { value: 0 };
  
  return gsap.to(counter, {
    value: endValue,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.round(counter.value) + suffix;
    },
    scrollTrigger: {
      trigger: element,
      ...getResponsiveScrollTrigger(),
      toggleActions: "play none none none"
    }
  });
};

// Magnetic hover effect for buttons/cards
export const magneticHover = (element) => {
  const mobile = isMobile();
  
  // Disable magnetic hover on mobile
  if (mobile) {
    return () => {}; // Return empty cleanup function
  }

  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(element, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// Morphing background animation
export const morphingBackground = (element, options = {}) => {
  const { duration = 4, colors = ['#667eea', '#764ba2', '#f093fb'] } = options;
  const mobile = isMobile();
  
  // Reduce animation complexity on mobile
  if (mobile) {
    return gsap.to(element, {
      background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
      duration: duration * 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
  
  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  
  colors.forEach((color, index) => {
    tl.to(element, {
      background: `linear-gradient(135deg, ${color}, ${colors[(index + 1) % colors.length]})`,
      duration: duration / colors.length,
      ease: "power2.inOut"
    });
  });

  return tl;
};

// Smooth section transitions with pin
export const pinnedSection = (element, options = {}) => {
  const { duration = 1, scrub = true } = options;
  const mobile = isMobile();
  
  // Disable pinning on mobile
  if (mobile) {
    return null;
  }
  
  return gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: scrub,
      anticipatePin: 1
    }
  });
};

// Create floating particles effect
export const floatingParticles = (container, options = {}) => {
  const { count = 20, speed = 0.5 } = options;
  const mobile = isMobile();
  
  // Reduce particle count on mobile
  const adjustedCount = mobile ? Math.floor(count * 0.5) : count;
  const particles = [];

  for (let i = 0; i < adjustedCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
      position: absolute;
      width: ${mobile ? '3px' : '4px'};
      height: ${mobile ? '3px' : '4px'};
      background: rgba(255, 255, 255, ${mobile ? '0.2' : '0.3'});
      border-radius: 50%;
      pointer-events: none;
    `;
    
    container.appendChild(particle);
    particles.push(particle);

    gsap.set(particle, {
      x: Math.random() * container.offsetWidth,
      y: Math.random() * container.offsetHeight,
      scale: Math.random() * 0.5 + 0.5
    });

    // Simplified animation for mobile
    gsap.to(particle, {
      y: "-=50",
      duration: Math.random() * 3 + 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 2
    });

    if (!mobile) {
      gsap.to(particle, {
        x: `+=${Math.random() * 100 - 50}`,
        duration: Math.random() * 4 + 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    }
  }

  return particles;
}; 
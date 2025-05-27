import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Premium fade-in with stagger animation
export const fadeInStagger = (elements, options = {}) => {
  const { 
    duration = 0.8, 
    stagger = 0.2, 
    y = 50, 
    delay = 0,
    ease = "power2.out"
  } = options;

  return gsap.fromTo(elements, 
    { 
      opacity: 0, 
      y: y,
      scale: 0.95
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      stagger,
      delay,
      ease,
      scrollTrigger: {
        trigger: elements[0],
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Parallax scrolling effect
export const parallaxScroll = (element, options = {}) => {
  const { speed = 0.5, direction = 'up' } = options;
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
  
  // Create a wrapper div for the reveal effect
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
        start: "top 85%",
        toggleActions: "play none none reverse"
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

  return gsap.fromTo(elements,
    {
      opacity: 0,
      scale: scale,
      rotation: rotation,
      filter: "blur(10px)"
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      filter: "blur(0px)",
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: elements[0],
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Premium slide in from sides
export const slideInFromSides = (leftElements, rightElements, options = {}) => {
  const { duration = 0.8, stagger = 0.2, distance = 100 } = options;

  const leftAnimation = gsap.fromTo(leftElements,
    { x: -distance, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: leftElements[0],
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );

  const rightAnimation = gsap.fromTo(rightElements,
    { x: distance, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: rightElements[0],
        start: "top 80%",
        toggleActions: "play none none reverse"
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
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
};

// Magnetic hover effect for buttons/cards
export const magneticHover = (element) => {
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
  const particles = [];

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
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

    gsap.to(particle, {
      y: "-=50",
      duration: Math.random() * 3 + 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 2
    });

    gsap.to(particle, {
      x: `+=${Math.random() * 100 - 50}`,
      duration: Math.random() * 4 + 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 2
    });
  }

  return particles;
}; 
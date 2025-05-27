# GSAP Animations Guide

This document outlines all the premium GSAP animations implemented in the portfolio website.

## 🎬 Animation Library Overview

The project uses GSAP (GreenSock Animation Platform) with ScrollTrigger for creating smooth, professional animations. All animations are organized in `src/utils/gsapAnimations.js`.

## 🛠️ Setup & Installation

### Dependencies
```bash
npm install gsap @gsap/react
```

### Core Files
- `src/utils/gsapAnimations.js` - Animation utility functions
- `src/hooks/useGSAP.js` - Custom React hook for GSAP integration
- `src/components/layout/ScrollProgressIndicator.jsx` - Scroll progress bar

## 🎯 Animation Functions

### 1. fadeInStagger
**Purpose**: Smooth fade-in with staggered timing for multiple elements
```javascript
fadeInStagger(elements, {
  duration: 0.8,
  stagger: 0.2,
  y: 50,
  delay: 0,
  ease: "power2.out"
})
```
**Used in**: All sections for header elements and content reveals

### 2. parallaxScroll
**Purpose**: Creates subtle parallax scrolling effects
```javascript
parallaxScroll(element, {
  speed: 0.5,
  direction: 'up'
})
```
**Used in**: Experience section cards and timeline

### 3. textReveal
**Purpose**: Premium text reveal animation with overflow masking
```javascript
textReveal(element, {
  duration: 1,
  delay: 0
})
```
**Used in**: About section title

### 4. scaleRotateReveal
**Purpose**: Dynamic scale and rotate reveal with blur effects
```javascript
scaleRotateReveal(elements, {
  duration: 1.2,
  stagger: 0.15,
  scale: 0.8,
  rotation: 5,
  ease: "back.out(1.7)"
})
```
**Used in**: Skills section cards

### 5. slideInFromSides
**Purpose**: Alternating slide-in animations from left and right
```javascript
slideInFromSides(leftElements, rightElements, {
  duration: 0.8,
  stagger: 0.2,
  distance: 100
})
```
**Used in**: About section facts

### 6. magneticHover
**Purpose**: Interactive magnetic hover effect for buttons/cards
```javascript
const cleanup = magneticHover(element);
```
**Used in**: Skills cards, contact buttons, social icons

### 7. morphingBackground
**Purpose**: Animated gradient background transitions
```javascript
morphingBackground(element, {
  duration: 4,
  colors: ['#667eea', '#764ba2', '#f093fb']
})
```
**Used in**: Hero, Contact sections

### 8. floatingParticles
**Purpose**: Animated floating particles background
```javascript
floatingParticles(container, {
  count: 20,
  speed: 0.5
})
```
**Used in**: All major sections

### 9. animateCounter
**Purpose**: Number counting animation
```javascript
animateCounter(element, {
  endValue: 100,
  duration: 2,
  suffix: "+"
})
```
**Available for**: Statistics and metrics

### 10. pinnedSection
**Purpose**: Pin sections during scroll for dramatic effect
```javascript
pinnedSection(element, {
  duration: 1,
  scrub: true
})
```
**Available for**: Special sections

## 📱 Component Integration

### useGSAP Hook
Custom hook that ensures proper cleanup and React integration:
```javascript
import useGSAP from "../../hooks/useGSAP";

useGSAP(() => {
  // GSAP animations here
  fadeInStagger(elements, options);
}, []);
```

### ScrollProgressIndicator
Animated scroll progress bar with glow effects:
- Fixed position at top of page
- Gradient background
- Smooth scaling animation
- Pulsing glow effect

## 🎨 Animation Patterns by Section

### HeroSection
- Floating particles background
- Morphing gradient background
- Framer Motion + GSAP hybrid approach

### AboutSection
- Badge fade-in
- Text reveal for title
- Staggered paragraph reveals
- Side-sliding facts

### SkillsSection
- Floating particles
- Header stagger animations
- Scale-rotate skill cards
- Magnetic hover effects

### ExperienceSection
- Progressive timeline line drawing
- Bouncing timeline markers
- Alternating card slide-ins
- Subtle parallax scrolling

### ContactSection
- Morphing background
- Floating particles
- Staggered content reveals
- Magnetic button effects

## ⚡ Performance Optimizations

1. **GSAP Context**: Automatic cleanup prevents memory leaks
2. **useLayoutEffect**: Prevents layout thrashing
3. **Transform-based animations**: Hardware acceleration
4. **Conditional rendering**: Animations only run when elements exist
5. **Debounced scroll events**: Smooth performance

## 🎛️ Customization Options

### Timing Controls
- `duration`: Animation length
- `delay`: Start delay
- `stagger`: Delay between multiple elements

### Easing Options
- `"power2.out"`: Smooth deceleration
- `"back.out(1.7)"`: Bouncy effect
- `"elastic.out(1, 0.3)"`: Elastic bounce

### Trigger Settings
- `start`: When animation begins
- `end`: When animation ends
- `toggleActions`: Play/pause/resume/reverse

## 🚀 Best Practices

1. **Always use refs**: Direct DOM manipulation through refs
2. **Cleanup functions**: Return cleanup from useEffect
3. **Conditional checks**: Verify elements exist before animating
4. **Performance monitoring**: Use browser dev tools
5. **Accessibility**: Respect `prefers-reduced-motion`

## 🔧 Troubleshooting

### Common Issues
1. **Animations not triggering**: Check element refs and ScrollTrigger setup
2. **Performance issues**: Reduce particle count or animation complexity
3. **Layout shifts**: Use `transform` instead of changing layout properties
4. **Memory leaks**: Ensure proper cleanup in useEffect

### Debug Mode
Enable GSAP markers for development:
```javascript
scrollTrigger: {
  trigger: element,
  markers: true, // Remove in production
  start: "top 80%"
}
```

## 📈 Future Enhancements

Potential additions:
- Smooth scroll locomotive integration
- Page transition animations
- Loading screen animations
- Mouse follower effects
- 3D transform animations

---

This animation system provides a solid foundation for creating engaging, professional web experiences while maintaining excellent performance and accessibility standards. 
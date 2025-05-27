import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const useGSAP = (callback, dependencies = []) => {
  const contextRef = useRef();

  useLayoutEffect(() => {
    // Create a GSAP context for proper cleanup
    contextRef.current = gsap.context(() => {
      if (callback) {
        callback(gsap);
      }
    });

    // Cleanup function
    return () => {
      if (contextRef.current) {
        contextRef.current.revert();
      }
    };
  }, dependencies);

  return contextRef.current;
};

export default useGSAP; 
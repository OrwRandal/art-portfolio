// useAnimateOnScroll.js
import { useEffect, useRef, useState } from 'react';

const useAnimateOnScroll = (threshold = 0.25, className = 'animated-class') => {
  const [isVisible, setIsVisible] = useState(false);
  const elementsRef = useRef([]);

  const handleScroll = () => {
    elementsRef.current.forEach((element) => {
      if (!element) return;

      const { top, bottom } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const elementVisible = (top + threshold * windowHeight < windowHeight) && (bottom > 0);

      if (elementVisible) {
        setIsVisible(true);
      } else if (isVisible) {
        // Set to false only if it was previously visible
        setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);

    // Check visibility once on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll); // Remove the event listener on unmount
    };
  }, [isVisible]); // Add isVisible to the dependency array

  return { ref: (el) => el && elementsRef.current.push(el), isVisible };
};

export default useAnimateOnScroll;

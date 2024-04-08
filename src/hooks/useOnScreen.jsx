import { useEffect, useState } from 'react';

export function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether the element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when the observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      observer.observe(ref.current);
      // Clean up the observer on unmount
      return () => {
        observer.unobserve(ref.current);
      };
    }
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}



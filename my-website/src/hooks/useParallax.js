import { useRef, useEffect, useState } from 'react';

export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const elementBottom = ref.current.getBoundingClientRect().bottom;
        
        // Only calculate parallax when element is in viewport
        if (elementBottom > 0 && elementTop < window.innerHeight) {
          const distance = window.scrollY - ref.current.offsetTop + window.innerHeight;
          setOffset(distance * speed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};

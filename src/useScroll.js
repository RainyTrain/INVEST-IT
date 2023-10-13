import { useEffect } from 'react';

export const useInfiniteScroll = ({ callback, triggerRef, wrapperRef }) => {
  useEffect(() => {
    let observer = null;

    const ref = triggerRef.current;

    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '1px',
        threshold: 1,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(ref);
    }

    return () => {
      if (observer) {
        observer.unobserve(ref);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};

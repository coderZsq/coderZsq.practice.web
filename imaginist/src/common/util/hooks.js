import { useEffect, useCallback, useRef } from 'react';

export function useLoadMore(callback) {
  const loadingRef = useRef(true);
  const onScroll = useCallback(() => {
    const buffer = 300;
    if (
      loadingRef.current &&
      window.scrollY + document.body.clientHeight >=
        document.body.scrollHeight - buffer
    ) {
      loadingRef.current = false;
      callback();
      setTimeout(() => {
        loadingRef.current = true;
      }, 0);
    }
  }, [callback]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
}

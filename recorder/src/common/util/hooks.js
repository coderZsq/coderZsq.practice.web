import { useEffect, useState, useCallback } from 'react';

export function useLoadMore(callback) {
  const [loading, setLoading] = useState(true);

  const onScroll = useCallback(() => {
    const buffer = 800;
    if (
      loading &&
      window.scrollY + document.body.clientHeight >=
        document.body.scrollHeight - buffer
    ) {
      setLoading(false);
      callback();
      setTimeout(() => {
        setLoading(true);
      }, 0);
    }
  }, [loading, callback]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
}

export function useBackTop() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
}
